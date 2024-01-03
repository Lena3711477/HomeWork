//@ts-check
const basePage = require('../tests/pageobjects/pageobject')
const {chromium, firefox} = require('playwright'); 
import { test, expect } from '@playwright/test';

test.describe('001 - Open Website   https://playwright.dev/', function () {
test('basic test', async ({ page }) => {
  const openPage = new basePage(page);
  await openPage.open();
    const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Playwright');
});
})