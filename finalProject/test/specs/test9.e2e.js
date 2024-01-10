const addinPage = require('../pageobjects/addin.page.js');
const appPage = require('../pageobjects/Functions');

describe('008 sign in the pane Share Email Template and click button Shortcuts in the pane', () => {

    beforeAll(() => {
    });

    it('008_1 Should open outlook.com and sign in to Outlook.', async () => {
        expect(await appPage.signInToOutlook()).toBe(true);
    });

    it('008_2 Should open a new email.', async () => {
        expect(await appPage.newEmail()).toBe(true);
    });

    it(' 008_3 Should open the add-in pane.', async () => {
        expect(await appPage.openAddin()).toBe(true);
    });
    it('008_4 Should sign in the pane Share Email Template.', async () => {
        expect(await appPage.signInToAddinPane()).toBe(true)
    });
    it('008_5 Should click button Tab Mail Merge', async () => {
        const buttonTabMailMerge = addinPage.buttonMailMerge;
        await buttonTabMailMerge.waitForClickable();
        await appPage.click(buttonTabMailMerge);
        const mailMerge = addinPage.teamMailMerge;
        const text = await mailMerge.getText();
        expect(text).toBe('Mail Merge');
    })
})