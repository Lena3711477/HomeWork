const appPage = require('../pageobjects/Functions.js');
const search = require('../pageobjects/search.js');

describe('010 sign in the pane Share Email Template and click button Search in the pane', () => {

    beforeAll(() => {
    });

    it('0010_1 Should open outlook.com and sign in to Outlook.', async () => {
        expect(await appPage.signInToOutlook()).toBe(true);
    });

    it('0010_2 Should open a new email.', async () => {
        expect(await appPage.newEmail()).toBe(true);
    });

    it(' 0010_3 Should open the add-in pane.', async () => {
        expect(await appPage.openAddin()).toBe(true);
    });
    it('0010_4 Should sign in the pane Share Email Template.', async () => {
        expect(await appPage.signInToAddinPane()).toBe(true);
    });
    it('0010_5 Should click button Search', async () => {
        expect(await search.searchByText('01')).toBe('01');
        await browser.pause(5000);
    });

})