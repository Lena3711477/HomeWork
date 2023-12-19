

const { describe, it, before, after } = require('mocha');
const { remote } = require('webdriverio');
const assert = require('assert');
 
describe('01_Should open the website and check the title' , function () {
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
 
it('should open the website and check the title', async function () {
    await browser.url('https://mochajs.org');
 
    const titleOnHomeElement = await browser.$('//*[@id="tag"]');
    const titleOnHome = await titleOnHomeElement.getText();
     assert.strictEqual(titleOnHome, 'simple, flexible, fun');
  });

//it('should click on node.js link', async function() {  
  //      const link = await browser.$('//*[@id="content"]/p[1]/a[1]');
    //    await link.click();
      //  const pageTitle = await browser.$('//*[@id="home-intro"]/h2').getText();
        //assert.strictEqual(pageTitle, 'Download Node.js®');
     
    //  });

//it('should click on GitHub link', async function() {  
  //     await browser.url('https://mochajs.org');
   //     const link = await browser.$('//*[@id="content"]/p[1]/a[2]');       
   //     await link.click();
    //    const pageTitle = await browser.$('//*[@id="repository-container-header"]/div[1]/div[1]/div[1]/strong/a').getText();
     //   assert.strictEqual(pageTitle, 'mocha');
     
    //  });

//it('should click on  backer link ', async function() {  
 //       await browser.url('https://mochajs.org');
  //       const link = await browser.$('//*[@id="content"]/p[3]/a');    
   //      await link.click();
    //     const pageTitle = await browser.$('//*[@id="__next"]/div[1]/main/div/div[1]/div/div[2]/h2').getText();
     //    assert.strictEqual(pageTitle, 'simple, flexible, fun javascript test framework for node.js & the browser.');
      
    //   });     
});

