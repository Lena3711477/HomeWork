const addinPage = require('../pageobjects/addin.page');
const appPage = require('../pageobjects/Functions');

describe('006 sign in the pane Share Email Template and click button Favorite in the pane', () => {

    beforeAll(() => {
    });

    it('006_1 Should open outlook.com and sign in to Outlook.', async () => {
        expect(await appPage.signInToOutlook()).toBe(true);
    });

    it('006_2 Should open a new email.', async () => {
        expect(await appPage.newEmail()).toBe(true);
    });

    it(' 006_3 Should open the add-in pane.', async () => {
        expect(await appPage.openAddin()).toBe(true);
    });
    it('006_4 Should sign in the pane Share Email Template.', async () => {
        expect(await appPage.signInToAddinPane()).toBe(true)
    });
    it('006_5 Should click button Tab Favorite', async () => {
        const textFavorite = await addinPage.checkTextFavorite();
        const text = await textFavorite.getText();
        await browser.pause(3000);
        expect(text).toBe('Favorite Templates');
    })
})