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
  await new Promise(r => setTimeout(r, 200));
  const el = await page.$('#section-breakup-stop-s2 .phone');
  if (!el) { console.error('phone not found for', filename); await browser.close(); return; }
  await el.screenshot({ path: join(__dirname, filename) });
  console.log('Saved:', filename);
  await browser.close();
}

(async () => {
  // s2-09: entry phrase state — orb neutral (waiting), CTA disabled, "One more cycle" hidden, label "Breathe in"
  await shot('s2-09-entry.png', () => {
    const img = document.querySelector('.sec-stop-s2 .s2-hero-img');
    if (img) img.className = 's2-hero-img waiting';
    const lbl = document.querySelector('.sec-stop-s2 .s2-phase-label');
    if (lbl) lbl.textContent = 'Breathe in';
    const num = document.querySelector('.sec-stop-s2 .s2-phase-num');
    if (num) num.textContent = '4';
    const cyc = document.querySelector('.sec-stop-s2 .s2-cycle');
    if (cyc) cyc.textContent = 'Cycle 1 of 4';
    // CTA disabled (already set in HTML), "One more cycle" hidden (already display:none)
  });

  // s2-10: mid-cycle — cycle 2 of 4, inhale
  await shot('s2-10-mid-cycle.png', () => {
    const img = document.querySelector('.sec-stop-s2 .s2-hero-img');
    if (img) img.className = 's2-hero-img inhale';
    const lbl = document.querySelector('.sec-stop-s2 .s2-phase-label');
    if (lbl) lbl.textContent = 'Breathe in';
    const num = document.querySelector('.sec-stop-s2 .s2-phase-num');
    if (num) num.textContent = '3';
    const cyc = document.querySelector('.sec-stop-s2 .s2-cycle');
    if (cyc) cyc.textContent = 'Cycle 2 of 4';
  });

  // s2-11: CTA enabled after cycle 4 — full saffron CTA, "One more cycle" visible
  await shot('s2-11-cta-enabled.png', () => {
    const img = document.querySelector('.sec-stop-s2 .s2-hero-img');
    if (img) img.className = 's2-hero-img hold-bottom';
    const lbl = document.querySelector('.sec-stop-s2 .s2-phase-label');
    if (lbl) lbl.textContent = 'Hold';
    const num = document.querySelector('.sec-stop-s2 .s2-phase-num');
    if (num) num.textContent = '1';
    const cyc = document.querySelector('.sec-stop-s2 .s2-cycle');
    if (cyc) cyc.textContent = 'Cycle 4 of 4';
    const cta = document.getElementById('s2-cta');
    if (cta) { cta.disabled = false; cta.classList.add('enabled'); }
    const more = document.getElementById('s2-more-cycle');
    if (more) more.classList.add('visible');
  });

  // s2-12: extra cycle 5 — "Cycle 5" counter, "One more cycle" hidden, orb exhale
  await shot('s2-12-extra-cycle.png', () => {
    const img = document.querySelector('.sec-stop-s2 .s2-hero-img');
    if (img) img.className = 's2-hero-img exhale';
    const lbl = document.querySelector('.sec-stop-s2 .s2-phase-label');
    if (lbl) lbl.textContent = 'Breathe out';
    const num = document.querySelector('.sec-stop-s2 .s2-phase-num');
    if (num) num.textContent = '2';
    const cyc = document.querySelector('.sec-stop-s2 .s2-cycle');
    if (cyc) cyc.textContent = 'Cycle 5';
    const cta = document.getElementById('s2-cta');
    if (cta) { cta.disabled = false; cta.classList.add('enabled'); }
    // "One more cycle" hidden during extra cycle (display:none, no visible class)
  });

  console.log('All done.');
})();
