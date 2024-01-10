const appPage = require('../pageobjects/Functions.js');

describe('SET_FUN_001 Залогиниться в Outlook.com', () => {

    beforeAll(() => {
    });

    it('001 Should open outlook.com and sign in to Outlook.', async () => {
        expect(await appPage.signInToOutlook()).toBe(true);
    });
})