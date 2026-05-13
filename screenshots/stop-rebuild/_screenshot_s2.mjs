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
function showSection(){}
document.querySelector('#section-breakup-stop-s2').classList.add('active');
<\/script></body></html>`;

writeFileSync(join(__dirname, '_preview_s2.html'), preview, 'utf8');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  // --- Measure height first ---
  {
    const page = await browser.newPage();
    await page.setViewport({ width: 450, height: 900, deviceScaleFactor: 1 });
    await page.setContent(preview, { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 1000));
    const h = await page.evaluate(() => {
      const phone = document.querySelector('#section-breakup-stop-s2 .phone');
      return phone ? phone.scrollHeight : -1;
    });
    console.log('scrollHeight:', h, 'px', h <= 780 ? '✓ within 780px' : '✗ EXCEEDS 780px');
    await page.close();
  }

  // --- Screenshot helper ---
  async function shot(cls, filename) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1000, height: 900, deviceScaleFactor: 2 });
    await page.setContent(preview, { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 1000));
    // Apply the orb class so transition is forced and measured
    await page.evaluate((c) => {
      const img = document.querySelector('.sec-stop-s2 .s2-hero-img');
      if (img) img.className = 's2-hero-img ' + c;
    }, cls);
    await new Promise(r => setTimeout(r, 200));
    const el = await page.$('#section-breakup-stop-s2 .phone');
    if (!el) { console.error('phone not found'); await page.close(); return; }
    const outPath = join(__dirname, filename);
    await el.screenshot({ path: outPath });
    console.log('Saved:', filename, '(class:', cls + ')');
    await page.close();
  }

  await shot('inhale',      's2-01-inhale.png');
  await shot('exhale',      's2-02-exhale.png');
  await shot('hold-bottom', 's2-03-full.png');

  await browser.close();
  console.log('Done.');
})();
