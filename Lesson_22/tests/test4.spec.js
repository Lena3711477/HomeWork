//@ts-check
const basePage =  require('./pageobjects/pageobject');
const {chromium, firefox} = require('playwright'); 
import { test, expect } from '@playwright/test';

test.describe('004 - Open Websitehttps://playwright.dev/ and click  the get Star', function () {
test('get started link', async ({ page }) => {
    const openPage = new basePage(page);
    await openPage.open();
    await openPage.clickButton('//a[text()="Codegen." and text()="Codegen."]');
    await expect(page.getByRole('heading', {name: 'Test generator'})).toBeVisible();
  });
  })


