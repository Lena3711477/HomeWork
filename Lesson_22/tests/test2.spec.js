//@ts-check
const basePage =  require('../tests/pageobjects/pageobject');
const {chromium, firefox} = require('playwright'); 
import { test, expect } from '@playwright/test';

test.describe('002 - Open Website ttps://playwright.dev/ and click  the get started link', function () {
test('get started link', async ({ page }) => {
  const openPage = new basePage(page);
  await openPage.open();
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('heading', {name: 'Installation'})).toBeVisible();
});
})

