const appPage = require('../pageobjects/Functions');

class SearchPane {

    get searchInput() {
        return $('#auto-complete-search > span > input');
    }
    get searchButton() {
        return $("#auto-complete-search > span > button.p-element.p-ripple.p-button-icon-only.p-button.p-component.search-button");
    }
    get closeSearchButton() {
        return $('#button-close-search > button');
    }
    get searchHiglight() {
        return $('font.adx-search-highlight');
    }
    async searchByText(text) {
        await browser.pause(10000);
        await appPage.click(await this.searchInput);
        await appPage.fillValue(await this.searchInput, text);
        await appPage.click(await this.searchButton);
        const searchHiglight = this.searchHiglight
        await searchHiglight.waitForDisplayed();
        const result = await searchHiglight.getText();
        //закрытие поиска
        await appPage.click(await this.closeSearchButton);
        return result;
    }
}
module.exports = new SearchPane();