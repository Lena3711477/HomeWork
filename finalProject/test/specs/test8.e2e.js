const addinPage = require('../pageobjects/addin.page');
const appPage = require('../pageobjects/Functions');

describe('007 sign in the pane Share Email Template and click button My Template in the pane', () => {

    beforeAll(() => {
    });

    it('007_1 Should open outlook.com and sign in to Outlook.', async () => {
        expect(await appPage.signInToOutlook()).toBe(true);
    });

    it('007_2 Should open a new email.', async () => {
        expect(await appPage.newEmail()).toBe(true);
    });

    it(' 007_3 Should open the add-in pane.', async () => {
        expect(await appPage.openAddin()).toBe(true);
    });
    it('007_4 Should sign in the pane Share Email Template.', async () => {
        expect(await appPage.signInToAddinPane()).toBe(true)
    });
    it('007_5 Should click button Tab My template', async () => {
        const textMyTemplate = await addinPage.checkTextMyTemplate();
        const text = await textMyTemplate.getText();
        await browser.pause(3000);
        expect(text).toBe('My Templates');
    })
})