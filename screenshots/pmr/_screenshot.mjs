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
function pmrStartSession(){}
function pmrRunDemo(){}
function pmrResetDim(){}
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
    id:  'breakup-pmr-entry',
    out: '01-entry.png',
    phoneSelector: '.pmr-phone',
    extraJs: ''
  },
  {
    id:  'breakup-pmr-setup',
    out: '02-setup-top.png',
    phoneSelector: '.pmr-phone',
    extraJs: ''
  },
  {
    id:  'breakup-pmr-setup',
    out: '03-setup-bottom.png',
    phoneSelector: '.pmr-phone',
    scrollToBottom: true,
    extraJs: ''
  },
  {
    id:  'breakup-pmr-session',
    out: '04-session.png',
    phoneSelector: '.pmr-phone',
    extraJs: `
      // Simulate pmrTick: highlight right-calf as initial active muscle
      var calf = document.querySelector('.pmr-body #right-calf');
      if (calf) calf.classList.add('pmr-active');
    `
  },
  {
    id:  'breakup-pmr-session',
    out: '05-session-dimmed.png',
    phoneSelector: '.pmr-phone',
    extraJs: `
      var calf = document.querySelector('.pmr-body #right-calf');
      if (calf) calf.classList.add('pmr-active');
      var phone = document.querySelector('.pmr-phone');
      if (phone) phone.classList.add('pmr-dimmed');
    `
  },
  {
    id:  'breakup-pmr-complete',
    out: '06-complete-scaffold.png',
    phoneSelector: '.pmr-phone',
    extraJs: ''
  },
];

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1000, height: 1000, deviceScaleFactor: 2 });

  for (const step of steps) {
    const sectionHtml = extractSection(step.id);
    if (!sectionHtml) {
      console.error('Could not extract HTML for ' + step.id);
      continue;
    }

    const previewHtml = makePreview(step.id, sectionHtml, step.extraJs);
    const slug = step.out.replace('.png', '');
    const previewPath = join(__dirname, '_preview_' + slug + '.html');
    writeFileSync(previewPath, previewHtml, 'utf8');

    await page.setContent(previewHtml, { waitUntil: 'domcontentloaded' });
    await new Promise(r => setTimeout(r, 1800));

    if (step.scrollToBottom) {
      await page.evaluate(() => {
        const scroll = document.querySelector('.pmr-scroll');
        if (scroll) scroll.scrollTop = scroll.scrollHeight;
      });
      await new Promise(r => setTimeout(r, 400));
    }

    const el = await page.$('#section-' + step.id + ' ' + step.phoneSelector);
    if (!el) {
      console.error('Could not find ' + step.phoneSelector + ' for ' + step.id);
      continue;
    }

    const outPath = join(__dirname, step.out);
    await el.screenshot({ path: outPath });
    console.log('Saved: ' + step.out);
  }

  await browser.close();
  console.log('Done.');
})();
