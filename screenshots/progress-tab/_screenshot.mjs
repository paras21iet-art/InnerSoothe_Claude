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
  const el = document.getElementById('section-progress');
  if (el) { el.style.display = 'block'; el.classList.add('active'); }
});
await new Promise(r => setTimeout(r, 300));

// Trigger renderProgress with mock data (localStorage not available in puppeteer without a URL)
await page.evaluate(() => {
  if (typeof window.renderProgress === 'function') window.renderProgress();
});
await new Promise(r => setTimeout(r, 400));

const el = await page.$('#section-progress .phone');
if (!el) { console.error('phone not found'); await browser.close(); process.exit(1); }
await el.screenshot({ path: join(__dirname, '01-progress-with-mock-data.png') });
console.log('Saved: 01-progress-with-mock-data.png');
await browser.close();
