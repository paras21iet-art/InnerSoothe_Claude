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

const preview = `<!DOCTYPE html>
<html><head><meta charset="utf-8">${FONT_LINK}
<style>
body { margin: 0; padding: 40px; background: #F0E8D0; display: flex; align-items: flex-start; justify-content: center; min-height: 100vh; box-sizing: border-box; }
.screens-area { display: none; }
.screens-area.active { display: block; }
${allCSS}
</style></head><body>
${sectionHtml}
<script>
window.stopSpeak=function(){};window.stopSpeakSequence=function(){};window.stopCancelVoice=function(){};
window.stopToggleMute=function(){};window.stopConfirmExit=function(){};
function showSection(){}function confirmStopS1(){}function advanceStopS1(){}function speakStopS1(){}
document.querySelector('#section-breakup-stop-s1').classList.add('active');
<\/script></body></html>`;

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 450, height: 900, deviceScaleFactor: 1 });
  await page.setContent(preview, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 2000));

  const result = await page.evaluate(() => {
    const phone = document.querySelector('#section-breakup-stop-s1 .phone');
    const hero = document.querySelector('.sec-stop-s1 .s1-hero');
    const img = document.querySelector('.sec-stop-s1 .s1-hero-img');

    // Computed styles on img
    const imgCS = window.getComputedStyle(img);
    const maskImage = imgCS.getPropertyValue('mask-image') || imgCS.getPropertyValue('-webkit-mask-image');
    const webkitMask = imgCS.getPropertyValue('-webkit-mask-image');

    // Hero container computed
    const heroCS = window.getComputedStyle(hero);

    // Walk up parent chain looking for overflow:hidden + non-transparent bg
    function walkParents(el) {
      const chain = [];
      let cur = el.parentElement;
      while (cur && cur !== document.body) {
        const cs = window.getComputedStyle(cur);
        chain.push({
          tag: cur.tagName.toLowerCase(),
          className: (cur.className || '').substring(0, 60),
          overflow: cs.overflow,
          overflowX: cs.overflowX,
          overflowY: cs.overflowY,
          background: cs.backgroundColor,
          backgroundImage: cs.backgroundImage.substring(0, 80),
        });
        cur = cur.parentElement;
      }
      return chain;
    }

    // Total content height
    const children = Array.from(phone.children);
    const last = children[children.length - 1];
    const totalH = Math.round(last.getBoundingClientRect().bottom - phone.getBoundingClientRect().top);

    return {
      // Computed mask on img
      maskImage: maskImage || 'NOT FOUND',
      webkitMask: webkitMask || 'NOT FOUND',
      // Hero container
      heroOverflow: heroCS.overflow,
      heroBg: heroCS.backgroundColor,
      heroH: heroCS.height,
      // Parent chain
      parentChain: walkParents(img),
      // Height
      totalContentHeight: totalH,
      phoneScrollHeight: phone.scrollHeight,
    };
  });

  console.log('=== Fix 1 Investigation ===');
  console.log('mask-image on img:',        result.maskImage.substring(0, 120));
  console.log('-webkit-mask-image on img:', result.webkitMask.substring(0, 120));
  console.log('Hero container overflow:', result.heroOverflow, '| bg:', result.heroBg, '| height:', result.heroH);
  console.log('');
  console.log('Parent chain (img → body):');
  result.parentChain.forEach((p, i) => {
    console.log(`  [${i}] .${p.className.split(' ').join('.')} overflow:${p.overflow} | bg: ${p.background}`);
  });
  console.log('');
  console.log('=== Fix 2 Pre-measurement ===');
  console.log('Total content height (rendered):', result.totalContentHeight, 'px');
  console.log('Phone scrollHeight:', result.phoneScrollHeight, 'px');

  await browser.close();
})();
