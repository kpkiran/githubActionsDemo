import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await expect(page.locator("[id='username']")).toBeVisible();
  await page.locator("[id='username']").fill("rahulshettyacademy");
  await page.locator("[id='password']").fill("learning");
  await page.locator("[id='terms']").check();
  await page.locator("[id = 'signInBtn']").click();

  expect(await page.locator('div.container > .navbar-brand').textContent())
    .toBe('ProtoCommerce Home');

});