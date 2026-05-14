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

async function shot(sectionId, filename, setupFn) {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1000, height: 900, deviceScaleFactor: 2 });
  await page.setContent(htmlSrc, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 600));
  await page.evaluate((id) => {
    document.querySelectorAll('.screens-area').forEach(s => { s.style.display = 'none'; s.classList.remove('active'); });
    const el = document.getElementById('section-' + id);
    if (el) { el.style.display = 'block'; el.classList.add('active'); }
  }, sectionId);
  await new Promise(r => setTimeout(r, 400));
  if (setupFn) await page.evaluate(setupFn);
  await new Promise(r => setTimeout(r, 400));
  const el = await page.$('#section-' + sectionId + ' .phone');
  if (!el) { console.error('phone not found for', sectionId); await browser.close(); return; }
  await el.screenshot({ path: join(__dirname, filename) });
  console.log('Saved:', filename);
  await browser.close();
}

(async () => {
  // 01-pre-checkin: show 2 emotions rated
  await shot('breakup-stop-pre-checkin', '01-pre-checkin.png', () => {
    if (typeof window.stopBuildPreGrid === 'function') window.stopBuildPreGrid();
    // Simulate selecting Sadness (rating 4) and Anxiety (rating 3)
    var pills = document.querySelectorAll('.spc-pill');
    // Sadness is index 1, Anxiety is index 6
    [1, 6].forEach(function(i) { if (pills[i]) pills[i].click(); });
    // Rate them
    if (typeof window.stopPreDot === 'function') {
      window.stopPreDot('Sadness', 4);
      window.stopPreDot('Anxiety', 3);
    }
  });

  // 02-post-checkin: no back button, same emotions to re-rate
  await shot('breakup-stop-post-checkin', '02-post-checkin.png', () => {
    window.stopPreSelected = { 'Sadness': '😔', 'Anxiety': '😰' };
    if (typeof window.stopBuildPostChips === 'function') window.stopBuildPostChips();
  });

  // 03-complete-top: with shift data populated
  await shot('breakup-stop-complete', '03-complete-top.png', () => {
    window.stopPreSelected = { 'Sadness': '😔', 'Anxiety': '😰' };
    window.stopPreRatings = { 'Sadness': 4, 'Anxiety': 3 };
    window.stopPostRatings = { 'Sadness': 2, 'Anxiety': 2 };
    window.stopS2CyclesCompleted = 4;
    window.stopS3Body = [{ emoji: '🫀', name: 'Chest' }, { emoji: '🤢', name: 'Stomach' }];
    window.stopS4Action = { emoji: '🚶', title: 'Take a short walk', desc: 'Step outside for 5–10 minutes.' };
    if (typeof window.stopRenderComplete === 'function') window.stopRenderComplete();
  });

  // 04-complete-bottom: scroll to bottom
  await shot('breakup-stop-complete', '04-complete-bottom.png', async () => {
    window.stopPreSelected = { 'Sadness': '😔', 'Anxiety': '😰' };
    window.stopPreRatings = { 'Sadness': 4, 'Anxiety': 3 };
    window.stopPostRatings = { 'Sadness': 2, 'Anxiety': 2 };
    window.stopS2CyclesCompleted = 4;
    window.stopS3Body = [{ emoji: '🫀', name: 'Chest' }, { emoji: '🤢', name: 'Stomach' }];
    window.stopS4Action = { emoji: '🚶', title: 'Take a short walk', desc: 'Step outside for 5–10 minutes.' };
    if (typeof window.stopRenderComplete === 'function') window.stopRenderComplete();
    var phone = document.querySelector('#section-breakup-stop-complete .phone');
    if (phone) phone.scrollTop = phone.scrollHeight;
  });

  console.log('All done.');
})();
