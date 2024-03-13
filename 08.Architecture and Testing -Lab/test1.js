import { chromium } from 'playwright-chromium';
import { expect } from 'chai';

/**
 * @type {import('playwright-chromium').BrowserType}
 */
let browser;

/**
 * @type {import('playwright-chromium').Page}
 */
 let page;
describe('E2E tests', async function() {
this.timeout(60000);

 before(async () => { browser = await chromium.launch( {headless:false, slowMo: 1500}); });
 after(async () => { await browser.close(); });
 beforeEach(async () => { page = await browser.newPage(); });
 afterEach(async () => { await page.close(); });

 it("works", async () => {
   await page.goto("http://localhost:5500/example.html");
//    await page.screenshot({path: "example.png"});
    const content = await page.textContent("h1");
    
    expect(content).to.contain("Hello Playwright!")
 });

it("has a working button", async () => {
     await page.goto("http://localhost:5500/example.html");
     await page.click("text=click me");

    //  const content = await page.textContent("h1");
    //  expect(content).to.contain("Code from page")
     
     const visible = await page.isVisible("text=code from page.");
     expect(visible).to.be.true

})

});