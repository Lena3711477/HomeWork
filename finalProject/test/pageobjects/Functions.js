const outlookPage = require('./outlook.page');
const addinPage = require('./addin.page');

class AppPage {
    // Текст ошибки
    handleErrorAndReturnFalse(error, message) {
        console.error(`Произошла ошибка: ${message}`, error);
        return false;
    }

    //  Открытие Outlook
    async signInToOutlook() {
        let result;
        // this.isbreak=true;
        try {
            await browser.url('https://outlook.office.com/mail/');
            result = await this.loginToOutlook();

        } catch (error) {
            return this.handleErrorAndReturnFalse(error, 'Вход в Outlook');
        }
              return result;
    }

    // Логин в Outlook
    async loginToOutlook() {
        try {
            await outlookPage.enterEmailLogin();
            await outlookPage.clickNextButton();
            await outlookPage.enterEpassword();
            await outlookPage.clickNextButton();

            const lightboxLocator = outlookPage.lightbox;
            const isLightboxPresent = await lightboxLocator.isExisting();

            if (isLightboxPresent) {
                await outlookPage.clickNextButton();
            }
        } catch (error) {
            return this.handleErrorAndReturnFalse(error, 'Логин в Outlook');

        }
        return true;
    }

    // Открытие нового сообщения
    async newEmail() {
        try {
            const element = await outlookPage.newEmailBar;
            await element.waitForDisplayed();
            await element.click();

        } catch (error) {
            return this.handleErrorAndReturnFalse(error, 'Открытие нового email');
        }
        return true;
    }

    // Открыть панель аддина
    async openAddin() {

        try {
            await outlookPage.openAddinPane();

        } catch (error) {
            return this.handleErrorAndReturnFalse(error, 'Открытие адд-ина');
        }
        return true;
    }

    // Логин в панель аддина через Email
    async signInToAddinPane() {
        try {
            await outlookPage.switchToIframe();
            await addinPage.clickSignInEmailButton();
            await addinPage.enterAddinEmail();
            await addinPage.enterAddinPassword();
            await addinPage.clickSignInButton();

        } catch (error) {
            return this.handleErrorAndReturnFalse(error, 'Вход в адд-ин');
        }
        return true;
    }

    //Открытие контекстного меню
    async openCotextMenu() {
        await addinPage.getTeamName('My Templates').waitForDisplayed();
        await addinPage.selectTeam('My Templates').click();

    }
    // Нажатие кнопки
    async click(element, mytimeout = 10000) {
        await element.waitForClickable({ timeout: mytimeout });
        return element.click();
    }
    // Поиск значения в поле search
    async fillValue(element, text, mytimeout = 10000, clearValue = true) {
        await element.waitForDisplayed({ timeout: mytimeout });
        if (clearValue) {
            return element.setValue(text);
        }
        return element.addValue(text);
    }

      async compareTextFavoriteTabFavorite() {
        try {
            await addinPage.clickFavoriteButton();
            const textFavorite = await addinPage.checkTextFavorite();
            const text = await textFavorite.getText();
            await browser.pause(3000);
            expect(text).toBe('Favorite Templates');
        } catch (error) {
            return this.compareTextFavoriteTabFavorite(error, 'Сравнение найденного текста');
        }
        return true;
    }
}
module.exports = new AppPage();
