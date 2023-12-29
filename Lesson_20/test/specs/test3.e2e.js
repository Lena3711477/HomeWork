const homePage = require('../pageobjects/homepage');
const basePage = require('../pageobjects/basePage');
const buttonNameInHtml = "Get Started";
const buttonName = "GET STARTED";
const titleText = "GETTING STARTED";

describe('003 - Open Website https://jasmine.github.io and click button "GETTIMG STARTED"', function () {

  it('003 should open the website and check the tab DOCS', async function () {
    await homePage.open();

    const buttonOnHomePage = await basePage.getButtonText(buttonNameInHtml);
    const buttonOnHome =await basePage.getElementText(buttonOnHomePage);
    expect(buttonOnHome).toBe(buttonName);
     await basePage.clickOnButton(buttonNameInHtml); 
     const titleOnGettingtStartedPage =await basePage.getTitltText_h1(titleText);
     const titleOnGettingtStarted = await basePage.getElementText(titleOnGettingtStartedPage);
     expect(titleOnGettingtStarted).toBe(titleText);
  
})
})