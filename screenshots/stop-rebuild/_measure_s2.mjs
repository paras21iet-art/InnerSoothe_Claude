import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
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
function showSection(){}
document.querySelector('#section-breakup-stop-s2').classList.add('active');
<\/script></body></html>`;

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1000, height: 1200, deviceScaleFactor: 1 });
  await page.setContent(preview, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1200));

  const measurements = await page.evaluate(() => {
    const phone = document.querySelector('#section-breakup-stop-s2 .phone');
    const phoneRect = phone.getBoundingClientRect();

    const selectors = [
      { key: 'status',       sel: '.sec-stop-s2 .status' },
      { key: 'step-hdr',     sel: '.sec-stop-s2 .step-hdr' },
      { key: 's2-eyebrow',   sel: '.sec-stop-s2 .s2-eyebrow' },
      { key: 's2-letter-row',sel: '.sec-stop-s2 .s2-letter-row' },
      { key: 's2-headline',  sel: '.sec-stop-s2 .s2-headline' },
      { key: 's2-body',      sel: '.sec-stop-s2 .s2-body' },
      { key: 's2-hero',      sel: '.sec-stop-s2 .s2-hero' },
      { key: 's2-phase-label', sel: '.sec-stop-s2 .s2-phase-label' },
      { key: 's2-phase-num', sel: '.sec-stop-s2 .s2-phase-num' },
      { key: 's2-cycle',     sel: '.sec-stop-s2 .s2-cycle' },
      { key: 's2-pattern-pill', sel: '.sec-stop-s2 .s2-pattern-pill' },
      { key: 's2-bottom-stack', sel: '.sec-stop-s2 .s2-bottom-stack' },
    ];

    const rects = {};
    selectors.forEach(({key, sel}) => {
      const el = document.querySelector(sel);
      if (el) {
        const r = el.getBoundingClientRect();
        rects[key] = {
          top: Math.round(r.top - phoneRect.top),
          bottom: Math.round(r.bottom - phoneRect.top),
          height: Math.round(r.height)
        };
      }
    });

    return {
      phoneScrollHeight: phone.scrollHeight,
      phoneClientHeight: phone.clientHeight,
      phoneOffsetHeight: phone.offsetHeight,
      phoneRect: { top: Math.round(phoneRect.top), height: Math.round(phoneRect.height) },
      rects
    };
  });

  const r = measurements.rects;
  const keys = Object.keys(r);

  console.log('\n=== Phone metrics ===');
  console.log('scrollHeight:', measurements.phoneScrollHeight);
  console.log('clientHeight:', measurements.phoneClientHeight);
  console.log('offsetHeight:', measurements.phoneOffsetHeight);
  console.log('phoneRect height:', measurements.phoneRect.height);

  console.log('\n=== Element positions (relative to phone top) ===');
  keys.forEach(k => {
    const el = r[k];
    if (el) console.log(`${k.padEnd(20)} top=${String(el.top).padStart(4)}  bottom=${String(el.bottom).padStart(4)}  h=${String(el.height).padStart(4)}`);
  });

  console.log('\n=== Gaps between adjacent elements ===');
  for (let i = 0; i < keys.length - 1; i++) {
    const a = r[keys[i]];
    const b = r[keys[i+1]];
    if (a && b) {
      const gap = b.top - a.bottom;
      console.log(`${keys[i].padEnd(20)} → ${keys[i+1].padEnd(20)} gap=${gap}px`);
    }
  }
  // Last element to phone bottom
  const last = r[keys[keys.length - 1]];
  if (last) {
    const phoneH = measurements.phoneClientHeight || 780;
    console.log(`s2-bottom-stack       → phone bottom          gap=${phoneH - last.bottom}px`);
  }

  await browser.close();
})();
