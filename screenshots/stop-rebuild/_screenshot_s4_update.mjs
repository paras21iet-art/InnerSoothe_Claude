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

async function shot(sectionId, filename) {
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
  const el = await page.$('#section-' + sectionId + ' .phone');
  if (!el) { console.error('phone not found for', sectionId); await browser.close(); return; }
  await el.screenshot({ path: join(__dirname, filename) });
  console.log('Saved:', filename);
  await browser.close();
}

(async () => {
  await shot('breakup-stop-s4', 's4-design-update-cards.png');
  await shot('breakup-stop-s1', 's1-progress-dots-with-labels.png');
  console.log('All done.');
})();
