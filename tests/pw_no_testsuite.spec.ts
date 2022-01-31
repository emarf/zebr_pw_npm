import {test, expect} from '@playwright/test';

test('my test', async ({page}, testInfo) => {
  testInfo.annotations.push({type: 'maintainer', description: 'emarf'});
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveURL('https://playwright.dev/');
});
