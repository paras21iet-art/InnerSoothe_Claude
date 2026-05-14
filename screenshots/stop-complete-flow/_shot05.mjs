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

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1000, height: 900, deviceScaleFactor: 2 });
await page.setContent(htmlSrc, { waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 600));
await page.evaluate(() => {
  document.querySelectorAll('.screens-area').forEach(s => { s.style.display = 'none'; s.classList.remove('active'); });
  const el = document.getElementById('section-breakup-stop-complete');
  if (el) { el.style.display = 'block'; el.classList.add('active'); }
});
await new Promise(r => setTimeout(r, 400));
await page.evaluate(() => {
  window.stopPreSelected = { 'Sadness': '\u{1F614}', 'Anxiety': '\u{1F630}' };
  window.stopPreRatings = { 'Sadness': 4, 'Anxiety': 3 };
  window.stopPostRatings = { 'Sadness': 2, 'Anxiety': 2 };
  window.stopS2CyclesCompleted = 4;
  window.stopS3Body = [{ emoji: '\u{1FAC0}', name: 'Chest' }, { emoji: '\u{1F922}', name: 'Stomach' }];
  window.stopS4Action = { emoji: '\u{1F6B6}', title: 'Take a short walk', desc: 'Step outside for 5–10 minutes.' };
  if (typeof window.stopRenderComplete === 'function') window.stopRenderComplete();
});
await new Promise(r => setTimeout(r, 400));
const el = await page.$('#section-breakup-stop-complete .phone');
await el.screenshot({ path: join(__dirname, '05-complete-fitted.png') });
console.log('Saved: 05-complete-fitted.png');
await browser.close();
