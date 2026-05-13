/**
 * Orb frame diagnostic: captures orb visual state at t=0,500,1000,1500,2000,2500,3000,3500,4000ms
 * after the inhale phase starts. Measures computed CSS transform matrix to get actual scale.
 * Runs entirely without audio (headless Chromium stubs speechSynthesis).
 */
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync, mkdirSync } from 'fs';

const require = createRequire(import.meta.url);
const puppeteer = require('C:\\Users\\Admin\\AppData\\Roaming\\npm\\node_modules\\puppeteer');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const OUT_DIR = join(__dirname, 's2-diag-orb-frames');
mkdirSync(OUT_DIR, { recursive: true });

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

// Extract the S2 script block so we have the real JS (with _diag instrumentation)
const scriptMatch = htmlSrc.match(/<!-- .*?section-breakup-stop-s2.*?-->\s*<script>([\s\S]*?)<\/script>/);
const s2Script = scriptMatch ? scriptMatch[1] : '';

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
/* ── Stubs for headless (no audio, no external globals) ── */
window.stopSession = { muted: true, currentUtterance: null };
window.stopSpeak = function(){};
window.stopSpeakSequence = function(){};
window.stopCancelVoice = function(){};
window.stopToggleMute = function(){};
window.stopConfirmExit = function(){};
window.speakStopS2 = function(){};
function showSection(){}
document.querySelector('#section-breakup-stop-s2').classList.add('active');

/* Expose phase-start timestamp so Node can synchronize frame captures */
window._s2PhaseStartedAt = null;
<\/script>
<script>
${s2Script}
<\/script>
<script>
/* Patch runPhase to record exact phase start time in DOM */
var _origRun = window.runS2BreathingCycles;
window.runS2BreathingCycles = function() {
  _origRun.apply(this, arguments);
};
<\/script>
</body></html>`;

function parseScale(matrixStr) {
  // matrix(a, b, c, d, tx, ty) — for uniform scale, a == d == scale
  if (!matrixStr || matrixStr === 'none') return null;
  const m = matrixStr.match(/matrix\(([^)]+)\)/);
  if (!m) return null;
  const vals = m[1].split(',').map(Number);
  return Math.round(vals[0] * 1000) / 1000;
}

async function captureFrames() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1000, height: 900, deviceScaleFactor: 2 });

  // Collect console.log lines from the page
  const logs = [];
  page.on('console', msg => {
    if (msg.type() === 'log') logs.push(msg.text());
  });

  await page.setContent(preview, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 500));

  // Trigger the breathing cycle directly (muted, skips intro)
  const triggerTime = Date.now();
  await page.evaluate(() => {
    window._s2triggerAt = Date.now();
    window.runS2BreathingCycles();
  });

  // Wait 500ms for the initial hold-bottom→runPhase delay inside runS2BreathingCycles
  await new Promise(r => setTimeout(r, 500));

  // Phase 1 (inhale) now starting. Capture at t=0,500,1000,1500,2000,2500,3000,3500,4000ms from here.
  const snapTimes = [0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000];
  const phaseStart = Date.now();

  console.log('\n── ORB FRAME MEASUREMENTS (inhale phase, muted) ──');
  console.log('t(ms)  | scale  | class                      | screenshot');

  for (const t of snapTimes) {
    const wait = t - (Date.now() - phaseStart);
    if (wait > 0) await new Promise(r => setTimeout(r, wait));

    const info = await page.evaluate(() => {
      const img = document.querySelector('.sec-stop-s2 .s2-hero-img');
      if (!img) return null;
      const cs = window.getComputedStyle(img);
      return {
        transform: cs.transform,
        className: img.className.trim(),
        transitionDuration: cs.transitionDuration,
        transitionTimingFunction: cs.transitionTimingFunction,
      };
    });

    const actualT = Date.now() - phaseStart;
    const scale = info ? parseScale(info.transform) : 'ERR';
    const cls = info ? info.className : '?';
    const filename = `orb-t${String(t).padStart(4,'0')}ms.png`;

    // Expected scale via cubic-bezier(0.4,0,0.4,1): approx linear at midpoint,
    // slow at start and end. inhale: 0.92→1.05 over 4000ms.
    // At t=0: 0.920, t=2000: ~0.985, t=4000: 1.050
    const progress = t / 4000;
    // Rough expected for cubic-bezier(0.4,0,0.4,1) — symmetric, very close to linear
    const expected = t === 0 ? 0.920 : t === 4000 ? 1.050 : +(0.920 + 0.130 * progress).toFixed(3);

    console.log(`t=${String(actualT).padStart(5)}ms | scale=${scale} | expected≈${expected} | class=${cls}`);

    const el = await page.$('#section-breakup-stop-s2 .phone');
    if (el) {
      await el.screenshot({ path: join(OUT_DIR, filename) });
      console.log(`         saved: ${filename}`);
    }
  }

  console.log('\n── CSS TRANSITION RULE (from computed style at t=0 snapshot) ──');
  const cssInfo = await page.evaluate(() => {
    const img = document.querySelector('.sec-stop-s2 .s2-hero-img');
    if (!img) return null;
    const cs = window.getComputedStyle(img);
    return {
      transitionDuration: cs.transitionDuration,
      transitionTimingFunction: cs.transitionTimingFunction,
      transitionProperty: cs.transitionProperty,
      transform: cs.transform,
    };
  });
  if (cssInfo) {
    console.log('  transition-duration:         ', cssInfo.transitionDuration);
    console.log('  transition-timing-function:  ', cssInfo.transitionTimingFunction);
    console.log('  transition-property:         ', cssInfo.transitionProperty);
    console.log('  current transform:           ', cssInfo.transform);
  }

  console.log('\n── INLINE TRANSFORM CHECK ──');
  const inlineCheck = await page.evaluate(() => {
    const img = document.querySelector('.sec-stop-s2 .s2-hero-img');
    if (!img) return null;
    return {
      inlineStyle: img.style.cssText,
      hasInlineTransform: !!img.style.transform,
    };
  });
  if (inlineCheck) {
    console.log('  inline style:', inlineCheck.inlineStyle || '(none)');
    console.log('  JS sets inline transform:', inlineCheck.hasInlineTransform);
  }

  console.log('\n── DIAGNOSTIC CONSOLE LOG (filtered from page) ──');
  logs.filter(l => l.startsWith('[') || l.includes('DIAG')).forEach(l => console.log(' ', l));

  await browser.close();
  console.log('\nAll frames saved to:', OUT_DIR);
}

captureFrames().catch(err => { console.error(err); process.exit(1); });
