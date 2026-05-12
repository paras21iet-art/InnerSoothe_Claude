import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync, writeFileSync } from 'fs';

const require = createRequire(import.meta.url);
const puppeteer = require('C:\\Users\\Admin\\AppData\\Roaming\\npm\\node_modules\\puppeteer');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const htmlSrc = readFileSync(
  'C:\\Users\\Admin\\Documents\\GitHub\\InnerSoothe_Claude\\innersoothe_wireframes_v3_12.html',
  'utf8'
);

const styleMatch = htmlSrc.match(/<style[^>]*>([\s\S]*?)<\/style>/);
const allCSS = styleMatch ? styleMatch[1] : '';

const FONT_LINK = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600&family=Spectral:ital,wght@0,300;0,400;1,300&display=swap" rel="stylesheet">`;

function makePreview(sectionId, sectionHtml, extraInitJs) {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
${FONT_LINK}
<style>
body { margin: 0; padding: 40px; background: #F0E8D0; display: flex; align-items: flex-start; justify-content: center; min-height: 100vh; box-sizing: border-box; }
.screens-area { display: none; }
.screens-area.active { display: block; }
.phone-grid { display: flex; align-items: flex-start; gap: 32px; }
.phone-wrap { display: flex; flex-direction: column; align-items: center; }
${allCSS}
</style>
</head>
<body>
${sectionHtml}
<script>
window.stopSession = { muted: true };
window.stopSpeak = function(){};
window.stopSpeakSequence = function(a, cb){ if(cb) cb(); };
window.stopCancelVoice = function(){};
window.stopToggleMute = function(){};
window.stopConfirmExit = function(){};
window.onStopSectionShow = function(){};
function showSection(id){
  document.querySelectorAll('.screens-area').forEach(function(s){ s.classList.remove('active'); });
  var el = document.getElementById('section-' + id);
  if (el) el.classList.add('active');
}
window._s2SessionId = 0;
function startStopS2Breathing(){}
function runBreathingCycles(){}
function runCountdown(){}
function s1TapConfirm(){}
function s3ToggleChip(){}
function s4SelectAction(){}
function speakStopS1(){}
function speakStopS3(){}
function speakStopS4(){}
function stopSelectMode(){}
showSection('${sectionId}');
${extraInitJs || ''}
</script>
</body>
</html>`;
}

function extractSection(id) {
  const re = new RegExp(`(<div[^>]+id="section-${id}"[\\s\\S]*?</div><!-- /section-${id} -->)`, 'g');
  const m = re.exec(htmlSrc);
  return m ? m[1] : null;
}

const steps = [
  {
    id:  'breakup-stop-s1',
    out: '02-step-s-v2.png',
    // No extra JS — Step 1 has no animation
    extraJs: ''
  },
  {
    id:  'breakup-stop-s2',
    out: '03-step-t-v2.png',
    // Show the orb mid-inhale so the screenshot reads as "breathing"
    extraJs: `
      var orb  = document.querySelector('.sec-stop-s2 .breath-orb');
      var halo = document.querySelector('.sec-stop-s2 .breath-halo');
      var lbl  = document.querySelector('.sec-stop-s2 .breath-phase-label');
      if (orb)  { orb.style.transition  = 'none'; orb.className  = 'breath-orb inhale'; }
      if (halo) { halo.style.transition = 'none'; halo.className = 'breath-halo inhale'; }
      if (lbl)  { lbl.textContent = 'Breathe in'; }
    `
  },
];

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 900, height: 900, deviceScaleFactor: 2 });

  for (const step of steps) {
    const sectionHtml = extractSection(step.id);
    if (!sectionHtml) {
      console.error('Could not extract HTML for ' + step.id);
      continue;
    }

    const previewHtml = makePreview(step.id, sectionHtml, step.extraJs);
    const previewPath = join(__dirname, '_preview_v2_' + step.out.replace('.png', '') + '.html');
    writeFileSync(previewPath, previewHtml, 'utf8');

    await page.setContent(previewHtml, { waitUntil: 'domcontentloaded' });
    await new Promise(r => setTimeout(r, 1500));

    const el = await page.$('#section-' + step.id + ' .phone');
    if (!el) {
      console.error('Could not find .phone for ' + step.id);
      continue;
    }

    const outPath = join(__dirname, step.out);
    await el.screenshot({ path: outPath });
    console.log('Saved: ' + step.out);
  }

  await browser.close();
  console.log('Done.');
})();
