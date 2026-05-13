import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';

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

const re = /(<div[^>]+id="section-breakup-stop-s2"[\s\S]*?<\/div><!-- \/section-breakup-stop-s2 -->)/g;
const m = re.exec(htmlSrc);
const heroPath = 'C:\\Users\\Admin\\Documents\\GitHub\\InnerSoothe_Claude\\assets\\illustrations\\Relationships\\Modules\\BreakupRecovery\\stop-s1-hero.png';
const heroB64 = readFileSync(heroPath).toString('base64');
const heroDataUrl = `data:image/png;base64,${heroB64}`;
const sectionHtml = m ? m[1].replace(
  /src="assets\/illustrations\/Relationships\/Modules\/BreakupRecovery\/stop-s1-hero\.png"/,
  `src="${heroDataUrl}"`
) : null;
if (!sectionHtml) { console.error('section not found'); process.exit(1); }

const preview = `<!DOCTYPE html>
<html><head><meta charset="utf-8">
${FONT_LINK}
<style>
body { margin: 0; padding: 40px; background: #F0E8D0; display: flex; align-items: flex-start; justify-content: center; min-height: 100vh; box-sizing: border-box; }
.screens-area { display: none; }
.screens-area.active { display: block; }
${allCSS}
</style></head><body>
${sectionHtml}
<script>
window.stopSpeak = function(){};
window.stopSpeakSequence = function(){};
window.stopCancelVoice = function(){};
window.stopToggleMute = function(){};
window.stopConfirmExit = function(){};
window.runS2BreathingCycles = function(){};
window.speakStopS2 = function(){};
window.s2ExtendCycle = function(){};
function showSection(){}
document.querySelector('#section-breakup-stop-s2').classList.add('active');
<\/script></body></html>`;

async function shot(filename, label, setupFn) {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1000, height: 900, deviceScaleFactor: 2 });
  await page.setContent(preview, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1000));
  await page.evaluate(setupFn);
  await new Promise(r => setTimeout(r, 400));
  const el = await page.$('#section-breakup-stop-s2 .phone');
  if (!el) { console.error('phone not found for', filename); await browser.close(); return; }
  await el.screenshot({ path: join(__dirname, filename) });
  const info = await page.evaluate(() => {
    const seg = document.querySelector('.sec-stop-s2 .s2-timeline-segment.active');
    if (!seg) return { noActive: true };
    const label = seg.querySelector('.s2-timeline-label');
    const count = seg.querySelector('.s2-timeline-count');
    const fill = seg.querySelector('.s2-timeline-fill');
    return {
      labelText: label ? label.textContent : '',
      countText: count ? count.textContent : '',
      countDisplay: count ? getComputedStyle(count).display : '',
      fillWidth: fill ? fill.style.width : '',
    };
  });
  console.log(`Saved: ${filename}  [${label}]`, JSON.stringify(info));
  await browser.close();
}

(async () => {
  // v8g-a: inhale, count "3" mid-phase (visual decoupled from voice)
  await shot('s2-v8g-sync.png', 'inhale-count3', () => {
    const img = document.querySelector('.sec-stop-s2 .s2-hero-img');
    if (img) { img.className = 's2-hero-img inhale'; img.style.transform = 'scale(0.975)'; }
    document.querySelector('.sec-stop-s2 .s2-phase-label').textContent = 'Breathe in';
    document.querySelector('.sec-stop-s2 .s2-cycle').textContent = 'Cycle 1 of 4';
    const seg0 = document.querySelector('.sec-stop-s2 .s2-timeline-segment[data-phase="0"]');
    seg0.classList.add('active');
    seg0.querySelector('.s2-timeline-fill').style.width = '65%';
    seg0.querySelector('.s2-timeline-count').textContent = '3';
  });

  // v8g-b: exhale, count "2" — confirm all 4 phases work
  await shot('s2-v8g-exhale.png', 'exhale-count2', () => {
    const img = document.querySelector('.sec-stop-s2 .s2-hero-img');
    if (img) { img.className = 's2-hero-img exhale'; img.style.transform = 'scale(0.975)'; }
    document.querySelector('.sec-stop-s2 .s2-phase-label').textContent = 'Breathe out';
    document.querySelector('.sec-stop-s2 .s2-cycle').textContent = 'Cycle 2 of 4';
    ['0','1'].forEach(p => {
      const seg = document.querySelector(`.sec-stop-s2 .s2-timeline-segment[data-phase="${p}"]`);
      seg.classList.add('completed'); seg.querySelector('.s2-timeline-fill').style.width = '100%';
    });
    const seg2 = document.querySelector('.sec-stop-s2 .s2-timeline-segment[data-phase="2"]');
    seg2.classList.add('active');
    seg2.querySelector('.s2-timeline-fill').style.width = '40%';
    seg2.querySelector('.s2-timeline-count').textContent = '2';
  });

  console.log('All done.');
})();
