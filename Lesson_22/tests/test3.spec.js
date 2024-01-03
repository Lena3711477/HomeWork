//@ts-check
const basePage =  require('../tests/pageobjects/pageobject');
const {chromium, firefox} = require('playwright'); 
import { test, expect } from '@playwright/test';

test.describe('003 - Open Websitehttps://playwright.dev/ and click  Codegen', function () {
test('get started link', async ({ page }) => {
    const openPage = new basePage(page);
    await openPage.open();
    await openPage.clickButton('//span[@class= "gh-text" and text()="Star"]');
    await expect(page.getByRole('heading', {name: 'playwright'})).toBeVisible();
  });
  })


    