const appPage = require('../pageobjects/Functions.js');

describe('SET_FUN_003 Создание пустой папки (ContextMenu)', () => {

    beforeAll(() => {
    });

    it('003_1 Should open outlook.com and sign in to Outlook.', async () => {
        expect(await appPage.signInToOutlook()).toBe(true);
    });

    it('003_2 Should open a new email.', async () => {
        expect(await appPage.newEmail()).toBe(true);
    });

    it('003_3 Should open the add-in pane.', async () => {
        expect(await appPage.openAddin()).toBe(true);
    });
    
})