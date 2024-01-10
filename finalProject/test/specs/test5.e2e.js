const appPage = require('../pageobjects/Functions.js');

describe('SET_FUN_004 sign in the pane Share Email Template', () => {

    beforeAll(() => {
    });

    it('004_1 Should open outlook.com and sign in to Outlook.', async () => {
        expect(await appPage.signInToOutlook()).toBe(true);
    });

    it('004_2 Should open a new email.', async () => {
        expect(await appPage.newEmail()).toBe(true);
    });

    it('004_3 Should open the add-in pane.', async () => {
        expect(await appPage.openAddin()).toBe(true);
    });
    it('004_4 Should sign in the pane Share Email Template.', async () => {
        expect(await appPage.signInToAddinPane()).toBe(true);
     });
  
})