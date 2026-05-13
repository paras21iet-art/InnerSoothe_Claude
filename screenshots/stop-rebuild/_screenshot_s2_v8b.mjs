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

async function shot(filename, setupFn) {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1000, height: 900, deviceScaleFactor: 2 });
  await page.setContent(preview, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1000));
  await page.evaluate(setupFn);
  await new Promise(r => setTimeout(r, 300));
  const el = await page.$('#section-breakup-stop-s2 .phone');
  if (!el) { console.error('phone not found for', filename); await browser.close(); return; }
  await el.screenshot({ path: join(__dirname, filename) });
  console.log('Saved:', filename);
  await browser.close();
}

(async () => {
  // s2-26: hold-top phase — orb static at 1.05, timeline segment 1 active (Hold)
  await shot('s2-26-hold-static.png', () => {
    const img = document.querySelector('.sec-stop-s2 .s2-hero-img');
    if (img) {
      img.className = 's2-hero-img hold-top';
      img.style.transform = 'scale(1.05)';
    }
    const lbl = document.querySelector('.sec-stop-s2 .s2-phase-label');
    if (lbl) lbl.textContent = 'Hold';
    const num = document.querySelector('.sec-stop-s2 .s2-phase-num');
    if (num) num.textContent = '2';
    const cyc = document.querySelector('.sec-stop-s2 .s2-cycle');
    if (cyc) cyc.textContent = 'Cycle 1 of 4';
    // Timeline: seg 0 completed, seg 1 active mid-way
    const seg0 = document.querySelector('.sec-stop-s2 .s2-timeline-segment[data-phase="0"]');
    if (seg0) { seg0.classList.add('completed'); seg0.querySelector('.s2-timeline-fill').style.width = '100%'; }
    const seg1 = document.querySelector('.sec-stop-s2 .s2-timeline-segment[data-phase="1"]');
    if (seg1) { seg1.classList.add('active'); seg1.querySelector('.s2-timeline-fill').style.width = '50%'; }
  });

  // s2-27: mid-inhale — segment 0 active with ~50% fill, orb mid-growth
  await shot('s2-27-timeline-mid-inhale.png', () => {
    const img = document.querySelector('.sec-stop-s2 .s2-hero-img');
    if (img) {
      img.className = 's2-hero-img inhale';
      img.style.transform = 'scale(0.985)';  // linear midpoint
    }
    const lbl = document.querySelector('.sec-stop-s2 .s2-phase-label');
    if (lbl) lbl.textContent = 'Breathe in';
    const num = document.querySelector('.sec-stop-s2 .s2-phase-num');
    if (num) num.textContent = '2';
    const cyc = document.querySelector('.sec-stop-s2 .s2-cycle');
    if (cyc) cyc.textContent = 'Cycle 1 of 4';
    // Timeline: seg 0 active at 50%
    const seg0 = document.querySelector('.sec-stop-s2 .s2-timeline-segment[data-phase="0"]');
    if (seg0) { seg0.classList.add('active'); seg0.querySelector('.s2-timeline-fill').style.width = '50%'; }
  });

  // s2-28: cycle 2 in progress — all segments reset, seg 0 active fresh
  await shot('s2-28-timeline-cycle2.png', () => {
    const img = document.querySelector('.sec-stop-s2 .s2-hero-img');
    if (img) {
      img.className = 's2-hero-img inhale';
      img.style.transform = 'scale(0.95)';
    }
    const lbl = document.querySelector('.sec-stop-s2 .s2-phase-label');
    if (lbl) lbl.textContent = 'Breathe in';
    const num = document.querySelector('.sec-stop-s2 .s2-phase-num');
    if (num) num.textContent = '1';
    const cyc = document.querySelector('.sec-stop-s2 .s2-cycle');
    if (cyc) cyc.textContent = 'Cycle 2 of 4';
    // Timeline: all reset, seg 0 active at ~20%
    const seg0 = document.querySelector('.sec-stop-s2 .s2-timeline-segment[data-phase="0"]');
    if (seg0) { seg0.classList.add('active'); seg0.querySelector('.s2-timeline-fill').style.width = '20%'; }
  });

  console.log('All done.');
})();
