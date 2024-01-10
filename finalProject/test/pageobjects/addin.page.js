const chromeConfig = require('../Data/constant');

class AddinPage {

    get buttonSignInEmail() {
        return $('//*[@class="p-button-label ng-star-inserted" and text()="Sign in with email"]');
    }

    get buttonSignIn() {
        return $('//*[@class="p-button-label ng-star-inserted" and text()="Sign in"]');
    }

    get inputAddinUser() {
        return $('input[name="username"]');
    }

    get inputAddinPassword() {
        return $('input[name="password"]');
    }

    // Контекстное меню в дереве
    get contextMenu() {
        return $('//*[@id="button-tree-dots"]/button');
    }
    // Кнопка All
    get buttonAll() {
        return $("#tab-all > button > span");
    }

    // кнопка Favorite
    get buttonFavorite() {
        return $('#tab-favorites > button > svg');

    }

    // кнопка MyTemplate
    get buttonMyTemplate() {
        return $("#tab-my > button > svg");
    }
    // кнопка Shortcuts
    get buttonShortcuts() {
        return $("#tab-shortcuts > button > svg");
    }

    // кнопка Mail Merge
    get buttonMailMerge() {
        return $("#tab-campaigns > button > svg");
    }

    get teamMailMerge() {
        return $('//*[@class="p-element adx-template-name" and text()="Mail Merge"]');
    }
    

    // Кнопка FavoriteTemplate
    get buttonFavoriteTemplate() {
        return $("#tab-favorites > button > svg");
    }

    // Текст на панели Favorite
    get textFavoriteTemplate() {
        return $("//*[contains(@class, 'adx-template-name') and text() = 'Favorite Templates']");

    }
    // Текст на панели My Template
    get textMyTemplate() {
        return $("#team-46182 > span.p-element.adx-template-name");

    }

    // Текст на панели Shortcuts
    get textSortcuts() {
        return $("#team--2 > span");
    }

    //open brauser
    get openBrowser() {
        return $('#button-open-in-browser > button');
    }

    // Button New Template
    get newTemplateButton() {
        return $('#footer-button-new-template > button > span');
    }

    //button Save Template
    get saveButtonnTemplate() {
        return $('(#button-save > button)');
    }
    // inputNameTemplate
    get inputNameTemplate() {
        return $('#input-template-name');

    }
    get futterButton() {
        return $('#footer-button-dots > button');

    }

    get helpButton() {
        return $('#help > span:nth-child(3)');
    }


    get teamMyTemplates() {
        return $('//*[@class="p-element adx-template-name" and text()="My Templates"]');
    }

    async getTeamName(teamName) {
        const xpath = `//*[@class="p-element adx-template-name" and text()="${teamName}"]`;
        const element = $(xpath);
        await element.waitForExist();
        return element;
    }

    async selectTeam(teamName) {
        const team = this.getTeamName(teamName);
        await team.waitForClickable();
        await team.click();
    }

    async clickSignInEmailButton() {
        const signInEmailButton = this.buttonSignInEmail;
        await signInEmailButton.waitForClickable();
        await signInEmailButton.click();
    }

    async clickSignInButton() {
        const signInButton = this.buttonSignIn;
        await signInButton.waitForClickable();
        await browser.pause(1000);
        await signInButton.click();
        await browser.pause(1000);
    }

    async enterAddinEmail() {
        const login = chromeConfig.addinUser;
        const inputUser = this.inputAddinUser;
        await inputUser.waitForDisplayed();
        await inputUser.setValue(login);
    }

    async enterAddinPassword() {
        const pass = chromeConfig.addinPassword;
        const inputPassword = this.inputAddinPassword;
        await inputPassword.waitForDisplayed();
        await inputPassword.setValue(pass);
    }

    async clickAllButton() {
        const allButton = this.buttonAll;
        await allButton.waitForClickable();
        await browser.pause(3000);
        await allButton.click();
        return allButton;
    }
    async checkTextFavorite() {
        let favariteTemplate = this.textFavoriteTemplate;
        await browser.pause(5000);
        await favariteTemplate.click();
        return favariteTemplate;
    }

    async clickFavoriteButton() {
        const favoriteButton = this.buttonFavorite;
        await favoriteButton.waitForDisplayed();
        await browser.pause(1000);
        await favoriteButton.click();
        return favoriteButton;
    }

    async clickMyTemplateButton() {
        const myTemplateButton = this.buttonMyTemplate;
        await myTemplateButton.waitForDisplayed();
        await browser.pause(1000);
        await myTemplateButton.click();
        return myTemplateButton;
    }
    async checkTextMyTemplate() {
        let myTemplate = this.textMyTemplate;
        await browser.pause(5000);
        await myTemplate.click();
        return myTemplate;

    }

    async clickShortcutsButton() {
        const shortcutsButton = this.buttonShortcuts;
        await shortcutsButton.waitForDisplayed();
        await browser.pause(1000);
        await shortcutsButton.click();
        return shortcutsButton;
    }

    async checkTextShotcuts() {
        let shortcuts = this.textSortcuts;
        await browser.pause(5000);
        await shortcuts.click();
        return shortcuts;

    }

}

module.exports = new AddinPage();