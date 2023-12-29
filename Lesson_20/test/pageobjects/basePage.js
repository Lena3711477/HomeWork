
class BasePage {
    async getTitleText_h5(text) {
        return $("//h5[text()='" + text + "']");
    }

    async getTitleText_h2(text) {
        return $("//h2[text()='" + text + "']");
    }

    async getElementText(element) {
        return await element.getText()
    }

    async getTabText(text) {
        return $("//a[@class='menu-option' and text()='" + text + "']");
    }

    async getButtonText(text) {
        return $("//a[@class='button' and text()='" + text + "']");
    }

    async clickOnTab(name) {
        return $("//a[@class='menu-option' and text()='" + name + "']").click();
    };

    async clickOnButton(name) {
        return $("//a[@class='button' and text()='" + name + "']").click();
    }
    async getTitltText_h1(text) {
        return await $("//h1[text()='" + text + "']")
    };
};

module.exports = new BasePage()
