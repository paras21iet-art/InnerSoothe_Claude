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
  await page.setViewport({ width: 450, height: 900, deviceScaleFactor: 1 });
  await page.setContent(preview, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 2000));

  const result = await page.evaluate(() => {
    const phone = document.querySelector('#section-breakup-stop-s1 .phone');
    const phoneRect = phone.getBoundingClientRect();
    const phoneInnerLeft = phoneRect.left + 1; // 1px border
    const phoneInnerRight = phoneRect.right - 1;
    const phoneInnerWidth = phoneInnerRight - phoneInnerLeft;

    function measure(sel) {
      const el = document.querySelector(sel);
      if (!el) return { error: 'not found: ' + sel };
      const r = el.getBoundingClientRect();
      return {
        leftFromInner: Math.round(r.left - phoneInnerLeft),
        rightFromInner: Math.round(phoneInnerRight - r.right),
        width: Math.round(r.width),
        height: Math.round(r.height),
      };
    }

    // Confirm card circle
    const circle = document.querySelector('.sec-stop-s1 .s1-confirm-check');
    const circleStyle = circle ? window.getComputedStyle(circle) : null;
    const circleInfo = circleStyle ? {
      width: circleStyle.width,
      height: circleStyle.height,
      border: circleStyle.border,
      background: circleStyle.backgroundColor,
    } : null;

    // Label
    const label = document.querySelector('.sec-stop-s1 .s1-confirm-label');
    const hint = document.querySelector('.sec-stop-s1 .s1-confirm-hint');
    const labelInfo = label ? {
      width: Math.round(label.getBoundingClientRect().width),
      height: Math.round(label.getBoundingClientRect().height),
      hintWidth: hint ? Math.round(hint.getBoundingClientRect().width) : 'N/A',
      lineHeight: window.getComputedStyle(label).lineHeight,
    } : null;

    return {
      phoneInnerWidth,
      quoteCard: measure('.sec-stop-s1 .s1-quote-card'),
      confirmCard: measure('.sec-stop-s1 .s1-confirm'),
      ctaWrap: measure('.sec-stop-s1 .step-cta-wrap'),
      cta: measure('.sec-stop-s1 .step-cta'),
      progressRow: measure('.sec-stop-s1 .step-progress'),
      circleInfo,
      labelInfo,
      totalContentHeight: (() => {
        const children = Array.from(phone.children);
        const last = children[children.length - 1];
        return Math.round(last.getBoundingClientRect().bottom - phone.getBoundingClientRect().top);
      })(),
    };
  });

  console.log('Phone inner width:', result.phoneInnerWidth);
  console.log('Total content height:', result.totalContentHeight);
  console.log('');
  console.log('Element alignment (left/right from phone inner edge):');
  console.log('  Quote card:   left=' + result.quoteCard.leftFromInner + 'px  right=' + result.quoteCard.rightFromInner + 'px  w=' + result.quoteCard.width + 'px');
  console.log('  Confirm card: left=' + result.confirmCard.leftFromInner + 'px  right=' + result.confirmCard.rightFromInner + 'px  w=' + result.confirmCard.width + 'px');
  console.log('  CTA wrap:     left=' + result.ctaWrap.leftFromInner + 'px  right=' + result.ctaWrap.rightFromInner + 'px  w=' + result.ctaWrap.width + 'px');
  console.log('  CTA button:   left=' + result.cta.leftFromInner + 'px  right=' + result.cta.rightFromInner + 'px  w=' + result.cta.width + 'px');
  console.log('  Progress row: left=' + result.progressRow.leftFromInner + 'px  right=' + result.progressRow.rightFromInner + 'px  w=' + result.progressRow.width + 'px');
  console.log('');
  console.log('Confirm circle:');
  if (result.circleInfo) {
    console.log('  width:', result.circleInfo.width, '| height:', result.circleInfo.height);
    console.log('  border:', result.circleInfo.border);
    console.log('  background:', result.circleInfo.background);
  }
  console.log('');
  console.log('Confirm label:');
  if (result.labelInfo) {
    console.log('  width:', result.labelInfo.width, '| height:', result.labelInfo.height, '| lineHeight:', result.labelInfo.lineHeight);
    console.log('  hint width:', result.labelInfo.hintWidth);
    console.log('  label lines:', Math.round(result.labelInfo.height / parseFloat(result.labelInfo.lineHeight)));
  }

  await browser.close();
})();
