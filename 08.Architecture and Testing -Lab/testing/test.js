import { chromium }  from 'playwright-chromium';
import { expect } from  'chai';

/**
 * @type {import('playwright-chromium').BrowserType}
 */
let browser;
/**
 * @type {import('playwright-chromium').Page}
*/
let page; 


describe('E2E tests', async function() {
 before(async () => { browser = await chromium.launch(); });
 after(async () => { await browser.close(); });
 beforeEach(async () => { page = await browser.newPage(); });
 afterEach(async () => { await page.close(); });

 it ("works", async () => {
      await page.goto("http://localhost:5500/example.html");
    //   await page.screenshot({ path:"example.png" }) 
    const content = await page.textContent("h1")

    console.log("content")
 });

 


 




});