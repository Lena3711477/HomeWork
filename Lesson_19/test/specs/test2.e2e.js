const { describe, it, before, after } = require('mocha');
const { remote } = require('webdriverio');
const assert = require('assert');
 
describe('02_Should Open Website and click on node.js link ', function () {
  let browser;
 
  before(async function () {
    browser = await remote({
      capabilities: {
        browserName: 'chrome',
      },
    });
  });
 
  after(async function () {
    await browser.deleteSession();
  });
  it('should click on node.js link', async function() {  

    await browser.url('https://mochajs.org');
    // const titleOnHomeElement = await browser.$('//*[@id="content"]//a[text()="Node.js"]');
    //const titleOnHome = await titleOnHomeElement.getText();
    // assert.strictEqual(titleOnHome, 'simple, flexible, fun');
    const link = await browser.$('//*[@id="content"]//a[text()="Node.js"]');
    await link.click();
    const pageTitle = await browser.$('//*[@id="home-intro"]/h2').getText();
    assert.strictEqual(pageTitle, 'Download Node.js®');
 
  });
});