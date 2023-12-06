
const assert = require('assert');
const { Builder, By, Key, until } = require('selenium-webdriver');

let driver;
before(async function () {
   driver = await new Builder().forBrowser('chrome').build();
    //browser window size
    await driver.manage().window().setRect({ width: 1920, height: 1080 });
});

describe('should open chromedriver.chromium.org and perform actions', function () {

    // 1 зайти на сайт https://chromedriver.chromium.org/home
    it('should open chromedriver.chromium.org and  perform actions check the text of the main title "ChromeDriver ', async function () {
        await driver.get('https://chromedriver.chromium.org/home');

        // 2  проверить текст основного тайтла "ChromeDriver";
        const originalTitle = await driver.findElement(By.xpath('//*[@id="h.p_ID_13"]//span')).getText();
        assert.strictEqual(originalTitle, 'ChromeDriver');
    });

    // 3 кликнуть в хедере на пункт "Chrome Extensions"; 
    it('should  perform actions click on the item in the header "Chrome Extensions"', async function () {
        const extensionsLink = await driver.findElement(By.xpath('//*[@id="WDxLfe"]//a[contains(@class, "aJHbb") and @href="/extensions" and @data-level="1" and text()="Chrome Extensions"]'));
        await driver.wait(until.elementIsVisible(extensionsLink), 4000);
        await extensionsLink.click();

        //5 проверить что новый тайтл стал "Chrome Extensions";
        const newTitle = await driver.findElement(By.xpath('//*[@id="h.p_ID_13"]//span')).getText();
        assert.strictEqual(newTitle, 'Chrome Extensions');
    });

    //4 сделать хайлайт для нового основного тайтла;
    it('should  perform actions check out the highlight for the new main title', async function () {

        const highlightedTitle = await driver.findElement(By.xpath('//*[@id="WDxLfe"]//a[contains(@class, "aJHbb") and @href="/extensions" and @data-level="1" and text()="Chrome Extensions"]'));
        await driver.wait(until.elementIsVisible(highlightedTitle), 4000);
        const color = await highlightedTitle.getCssValue('color');
        const expectedColor = 'rgba(255, 255, 255, 1)';
        assert.strictEqual(color, expectedColor, 'Цвет текста не соответствует ожидаемому.');
    });

    //Поиск -  1 открываем страницу поиска;
    it('should Go to the search page and should enter the word “driver” in the search field;', async function () {
        // находим  поиск и кликаем "
        const searchInput1 = await driver.findElement(By.xpath('//*[@id="atIdViewHeader"]/div/div[2]/div[1]/div[2]'));
        await searchInput1.click();
        const searchInput = await driver.findElement(By.xpath('//*[@id="yDmH0d"]//*[@type="search"]'));

        //Добавляем ожидание, чтобы убедиться, что поле поиска загружено
        await driver.wait(until.elementIsVisible(searchInput), 5000);

        // 2 Вводим текст 'driver'  для поиска
        await searchInput.sendKeys('driver');

        // Проверяем, что введенный текст соответствует ожидаемому
        assert.equal(await searchInput.getAttribute('value'), 'driver');
        // Нажимаем Enter
        await searchInput.sendKeys(Key.ENTER);
        // Проверяем, что страница изменилась
        const searchResult = await driver.wait(until.elementLocated(By.xpath('//*[@id="yDmH0d"]//*[@class="DLXGJd"]//*[@class="x8xhwb"]')), 10000);
        let textResult = await searchResult.getText();
        assert.strictEqual(textResult, ('Results from this site'))
    });

    // 3 находим первую ссылку и проверяем, что она содержит слово "driver"
    it('should find the first link and check if it contains the word "driver"', async function () {
        const searchResult = await driver.wait(until.elementLocated(By.css('div.gtazFe > div > div:nth-child(2)')), 10000);
        let text = await searchResult.getText();
        expect(text.includes('driver')).toBe(true);
    });

    after(async function () {
        // Закрываем окно браузера
        await driver.quit();

    });
})












