const homePage = require('../pageobjects/homepage');
const basePage = require('../pageobjects/basePage');
const tabInHTML = "Docs"
const tabName = "DOCS"
const titleText = "API Reference"

describe('002 - Open Website https://jasmine.github.io and click tab "DOCS"', function () {

    it('002 should open the website and check the tab DOCS', async function () {
        await homePage.open();
        const tabOnHomeElement = await basePage.getTabText(tabInHTML)
        const tabOnHome = await basePage.getElementText(tabOnHomeElement);
        expect(tabOnHome).toBe(tabName);
        await basePage.clickOnTab(tabInHTML);
         const titleOnDocsPage = await basePage.getTitleText_h2(titleText);
         const titleOnDocs = await basePage.getElementText(titleOnDocsPage)
         expect(titleOnDocs).toBe(titleText);
    })
})
