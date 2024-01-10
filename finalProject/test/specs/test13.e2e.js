const addinPage = require('../pageobjects/addin.page.js');
const appPage = require('../pageobjects/Functions.js');

describe('011 sign in the pane Share Email Template and click Sbutton New Template and Create new name Templane', () => {

    beforeAll(() => {
    });
    it('0012_1 Should open outlook.com and sign in to Outlook.', async () => {
        expect(await appPage.signInToOutlook()).toBe(true);
    });

    it('0012_2 Should open a new email.', async () => {
        expect(await appPage.newEmail()).toBe(true);
    });

    it(' 0012_3 Should open the add-in pane.', async () => {
        expect(await appPage.openAddin()).toBe(true);
    });
    it('0012_4 Should sign in the pane Share Email Template.', async () => {
        expect(await appPage.signInToAddinPane()).toBe(true);
    });
    it('0012_5 Should click button New Template and Create new nameTemplate', async () => {
        await browser.pause(10000);
        const buttonNewTemplate = addinPage.newTemplateButton;
        await buttonNewTemplate.waitForClickable();
        await appPage.click(buttonNewTemplate);
        await browser.pause(5000);
        const inputNameNewTemplate = addinPage.inputNameTemplate;
        await appPage.fillValue(inputNameNewTemplate, 'Test template');
        const textname = await inputNameNewTemplate.getValue();
        expect(textname).toBe('Test template');
    });
})