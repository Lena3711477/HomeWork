const addinPage = require('../pageobjects/addin.page.js');
const appPage = require('../pageobjects/Functions.js');

describe('011 sign in the pane Share Email Template and click footer-button and click button help', () => {

    beforeAll(() => {
    });

    it('0013_1 Should open outlook.com and sign in to Outlook.', async () => {
        expect(await appPage.signInToOutlook()).toBe(true);
    });

    it('0013_2 Should open a new email.', async () => {
        expect(await appPage.newEmail()).toBe(true);
    });

    it(' 0013_3 Should open the add-in pane.', async () => {
        expect(await appPage.openAddin()).toBe(true);
    });
    it('0013_4 Should sign in the pane Share Email Template.', async () => {
        expect(await appPage.signInToAddinPane()).toBe(true);

    });
    it('0013_5 Should click button footer-button and click button help', async () => {
        await browser.pause(15000);
        const futterButton = addinPage.futterButton;
        await appPage.click(futterButton);
        await browser.pause(5000);
        const helpButton = addinPage.helpButton;
        await appPage.click(helpButton);
        await browser.pause(1000);
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
        const result = await browser.getUrl();
        expect(result).toBe('https://www.ablebits.com/docs/outlook-shared-templates-intro/?client=oladdin&src=ellipsishelp');
    })
})