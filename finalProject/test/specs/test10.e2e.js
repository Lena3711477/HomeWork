const addinPage = require('../pageobjects/addin.page');
const appPage = require('../pageobjects/Functions');

describe('009 sign in the pane Share Email Template and click button Shortcuts in the pane', () => {

    beforeAll(() => {
    });

    it('009_1 Should open outlook.com and sign in to Outlook.', async () => {
        expect(await appPage.signInToOutlook()).toBe(true);
    });

    it('009_2 Should open a new email.', async () => {
        expect(await appPage.newEmail()).toBe(true);
    });

    it(' 009_3 Should open the add-in pane.', async () => {
        expect(await appPage.openAddin()).toBe(true);
    });
    it('009_4 Should sign in the pane Share Email Template.', async () => {
        expect(await appPage.signInToAddinPane()).toBe(true);
    });
    it('009_5 Should click button Tab Shortcuts', async () => {
        await addinPage.clickShortcutsButton();
        const textShotcuts = await addinPage.checkTextShotcuts();
        const text = await textShotcuts.getText();
        await browser.pause(3000);
        expect(text).toBe('Shortcuts');
    })
})