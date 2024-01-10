const addinPage = require('../pageobjects/addin.page.js');
const appPage = require('../pageobjects/Functions.js');

describe('011 sign in the pane Share Email Template and click Should click button Open in Browser in the pane', () => {

    beforeAll(() => {
    });

    it('0011_1 Should open outlook.com and sign in to Outlook.', async () => {
        expect(await appPage.signInToOutlook()).toBe(true);
    });

    it('0011_2 Should open a new email.', async () => {
        expect(await appPage.newEmail()).toBe(true);
    });

    it(' 0011_3 Should open the add-in pane.', async () => {
        expect(await appPage.openAddin()).toBe(true);
    });
    it('0011_4 Should sign in the pane Share Email Template.', async () => {
        expect(await appPage.signInToAddinPane()).toBe(true);
    });
    it('0011_5 Should click button Open in Browser', async () => {
        const openBrowserButton = addinPage.openBrowser;
        await appPage.click(openBrowserButton);
        condition = true;
        condition2 = 1;
        //ожидание, пока значение на будет равно 2 в течении времени 
        while (condition && condition2 < 10) {
            if (await browser.getWindowHandles().length === 2) {
                condition = false;
            }
            await browser.pause(1000);
            condition2++;
        }
        //массив из кол-ва открытых страниц
        const currentTabs = await browser.getWindowHandles();

        //переключает на последний элемент в массие, т.е. на вторую страницу
        await browser.switchToWindow(currentTabs[currentTabs.length - 1]);
        const result = await browser.getTitle();
        expect(result).toBe('Shared Email Templates for Microsoft 365, Outlook web app, Outlook for Mac');

    });

})