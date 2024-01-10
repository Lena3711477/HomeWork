const appPage = require('../pageobjects/Functions.js');

describe('SET_FUN_002 проверка логина в outlook.com', () => {
   
    beforeAll(() => {
    });

    it('002_1 Should open outlook.com and sign in to Outlook.', async () => {
        expect(await appPage.signInToOutlook()).toBe(true);
    });

    it('002_2 Should open a new email.', async () => {
        expect(await appPage.newEmail()).toBe(true);
    });

})
