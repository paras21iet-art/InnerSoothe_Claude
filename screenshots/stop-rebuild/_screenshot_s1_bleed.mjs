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

// Override phone height to auto + overflow visible so full content renders for screenshots
const screenshotCSS = allCSS.replace(
  /\.sec-stop-s1\.screens-area \.phone \{[^}]*\}/,
  `.sec-stop-s1.screens-area .phone {
    display: flex; flex-direction: column; height: auto; overflow: visible;
  }`
);

const FONT_LINK = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600&family=Spectral:ital,wght@0,300;0,400;1,300&display=swap" rel="stylesheet">`;

const re = /(<div[^>]+id="section-breakup-stop-s1"[\s\S]*?<\/div><!-- \/section-breakup-stop-s1 -->)/g;
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
${screenshotCSS}
</style></head><body>
${sectionHtml}
<script>
window.stopSpeak = function(){};
window.stopSpeakSequence = function(){};
window.stopCancelVoice = function(){};
window.stopToggleMute = function(){};
window.stopConfirmExit = function(){};
function showSection(){}
function confirmStopS1(){}
function advanceStopS1(){}
function speakStopS1(){}
document.querySelector('#section-breakup-stop-s1').classList.add('active');
<\/script></body></html>`;

writeFileSync(join(__dirname, '_preview_s1_bleed.html'), preview, 'utf8');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1000, height: 1400, deviceScaleFactor: 2 });
  await page.setContent(preview, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 2000));

  const el = await page.$('#section-breakup-stop-s1 .phone');
  if (!el) {
    console.error('phone element not found');
    await browser.close();
    process.exit(1);
  }

  const box = await el.boundingBox();
  console.log('Phone bounding box:', JSON.stringify(box));

  const DSF = 2;
  // Top screenshot: covers status bar → bottom of hero (approx top 55% of content)
  const topH = Math.round(box.height * 0.58);
  await page.screenshot({
    path: join(__dirname, '10-s1-bleed-top.png'),
    clip: { x: box.x, y: box.y, width: box.width, height: topH }
  });
  console.log(`Saved: 10-s1-bleed-top.png  (clip height: ${topH}px CSS)`);

  // Bottom screenshot: from just above quote card to end of phone content
  const bottomStart = Math.round(box.height * 0.48);
  const bottomH = box.height - bottomStart;
  await page.screenshot({
    path: join(__dirname, '10-s1-bleed-bottom.png'),
    clip: { x: box.x, y: box.y + bottomStart, width: box.width, height: bottomH }
  });
  console.log(`Saved: 10-s1-bleed-bottom.png  (clip height: ${bottomH}px CSS)`);

  // Also run measurement for Fix 3 verification
  const result = await page.evaluate(() => {
    const phone = document.querySelector('#section-breakup-stop-s1 .phone');
    const stack = document.querySelector('#section-breakup-stop-s1 .s1-bottom-stack');
    const stackRect = stack.getBoundingClientRect();
    function w(sel) {
      const el = document.querySelector(sel);
      return el ? Math.round(el.getBoundingClientRect().width) : 'N/A';
    }
    return {
      totalContentHeight: Math.round(phone.scrollHeight),
      stackInnerWidth: Math.round(stackRect.width),
      quoteCardW: w('.sec-stop-s1 .s1-quote-card'),
      confirmCardW: w('.sec-stop-s1 .s1-confirm'),
      ctaWrapW: w('.sec-stop-s1 .step-cta-wrap'),
      progressRowW: w('.sec-stop-s1 .step-progress'),
    };
  });

  console.log('');
  console.log('Measurement (Fix 3 verification):');
  console.log('  Total content height (scrollHeight):', result.totalContentHeight, 'px');
  console.log('  Stack inner width:', result.stackInnerWidth, 'px');
  console.log('  Quote card width:', result.quoteCardW, 'px');
  console.log('  Confirm card width:', result.confirmCardW, 'px');
  console.log('  CTA wrap width:', result.ctaWrapW, 'px');
  console.log('  Progress row width:', result.progressRowW, 'px');
  console.log('  All siblings equal?', [result.quoteCardW, result.confirmCardW, result.ctaWrapW, result.progressRowW].every(v => v === result.quoteCardW) ? 'YES ✓' : 'NO — mismatch');

  await browser.close();
  console.log('Done.');
})();
