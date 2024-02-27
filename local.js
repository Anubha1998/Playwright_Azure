const { chromium } = require('playwright');
(async () => {
const browser = await chromium.launch({ headless: false })
  const page = await browser.newPage();
  await page.goto("https://duckduckgo.com");
  let element = await page.locator("[name=\"q\"]");
  await element.click();
  await element.type("LambdaTest");
  await element.press("Enter");
  const title = await page.title()
//   await page.screenshot({ path: 'first.png' });
//   await sleep(2000); // Sleep for 2000 milliseconds (2 seconds)
  await browser.close();
})();