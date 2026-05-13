import { createRequire } from 'module';
import { readFileSync } from 'fs';

const require = createRequire(import.meta.url);
const puppeteer = require('C:\\Users\\Admin\\AppData\\Roaming\\npm\\node_modules\\puppeteer');

const htmlSrc = readFileSync(
  'C:\\Users\\Admin\\Documents\\GitHub\\InnerSoothe_Claude\\innersoothe_wireframes_v3_12.html',
  'utf8'
);

const styleMatch = htmlSrc.match(/<style[^>]*>([\s\S]*?)<\/style>/);
const allCSS = styleMatch ? styleMatch[1] : '';

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

// Patch CSS: override hint to remove min-width so we can measure natural width
const patchedCSS = allCSS.replace(
  /\.sec-stop-s1 \.s1-confirm-hint \{[^}]*\}/,
  `.sec-stop-s1 .s1-confirm-hint {
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    font-size: 9.5px;
    color: rgba(33, 24, 12, 0.40);
    white-space: nowrap;
    flex: 0 0 auto;
  }`
);

const preview = `<!DOCTYPE html>
<html><head><meta charset="utf-8">
${FONT_LINK}
<style>
body { margin: 0; padding: 40px; background: #F0E8D0; display: flex; align-items: flex-start; justify-content: center; min-height: 100vh; box-sizing: border-box; }
.screens-area { display: none; }
.screens-area.active { display: block; }
${patchedCSS}
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

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 450, height: 1100, deviceScaleFactor: 1 });
  await page.setContent(preview, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 2000));

  const result = await page.evaluate(() => {
    const hint = document.querySelector('.sec-stop-s1 .s1-confirm-hint');
    const label = document.querySelector('.sec-stop-s1 .s1-confirm-label');
    const card = document.querySelector('.sec-stop-s1 .s1-confirm');
    return {
      hintWidth: hint ? Math.round(hint.getBoundingClientRect().width) : 'N/A',
      labelWidth: label ? Math.round(label.getBoundingClientRect().width) : 'N/A',
      labelHeight: label ? Math.round(label.getBoundingClientRect().height) : 'N/A',
      labelLineHeight: label ? window.getComputedStyle(label).lineHeight : 'N/A',
      cardHeight: card ? Math.round(card.getBoundingClientRect().height) : 'N/A',
    };
  });

  console.log('WITHOUT min-width:');
  console.log('  Hint width (natural):', result.hintWidth);
  console.log('  Label width:', result.labelWidth);
  console.log('  Label height:', result.labelHeight, '| lineHeight:', result.labelLineHeight);
  console.log('  Card height:', result.cardHeight);

  await browser.close();
})();
