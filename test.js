const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:5500/brocher/vizo_brochure.html', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'full.png', fullPage: true });
  await browser.close();
})();