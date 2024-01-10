const chromeConfig = require('../Data/constant');

class AccountsLocators {

    get inputUser() {
        return $('input[name="loginfmt"]');
    }

    get inputPassword() {
        return $('input[name="passwd"]');
    }

    get buttonNext() {
        return $('#idSIButton9');
    }

    get lightbox() {
        return $('//*[@id="lightbox"]');
    }

    get newEmailBar() {
        return $('//*[@id="BottomBar"]//*[contains(@class, "ms-Button-textContainer")][1]');
    }

    get addinOnRibbon() {
        return $('//button[@type="button" and @aria-label="Shared Email Templates"]');
    }

    get addinIframe() {
        return $('//iframe[@class="AddinIframe"]');
    }

    async switchToIframe() {
        await this.addinIframe.waitForDisplayed();
        const iframeElement = await this.addinIframe;
        await browser.switchToFrame(iframeElement);
    }

    async openAddinPane() {
        const addin = this.addinOnRibbon;
        await addin.waitForClickable();
        await addin.click();
    }

    async clickNextButton() {
        const nextButton = this.buttonNext;
        await nextButton.waitForClickable();
        await nextButton.click();
    }

    async enterEmailLogin() {
        const login = chromeConfig.user;
        const inputUser = this.inputUser;
        await inputUser.waitForDisplayed();
        await inputUser.setValue(login);
    }

    async enterEpassword() {
        const pass = chromeConfig.password;
        const inputPassword = this.inputPassword;
        await inputPassword.waitForDisplayed();
        await inputPassword.setValue(pass);
    }
    
}

module.exports = new AccountsLocators();