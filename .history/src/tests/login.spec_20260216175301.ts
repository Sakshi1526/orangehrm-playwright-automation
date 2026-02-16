import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { testData } from '../fixtures/testData';
import { URLS } from '../utils/constants';

test.describe('OrangeHRM Login Tests', () => {

  test('Valid username and valid password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.gotoLogin(URLS.LOGIN_URL);
    await loginPage.login(
      testData.validUser.username,
      testData.validUser.password
    );

    await expect.soft(page).toHaveURL(/dashboard/);
    await expect.soft(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  });

  test('Valid username and wrong password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.gotoLogin(URLS.LOGIN_URL);
    await loginPage.login(
      testData.validUser.username,
      testData.invalidUser.password
    );

    await expect.soft(loginPage.errorMessage).toBeVisible();
    await expect.soft(loginPage.errorMessage).toContainText('Invalid credentials');
  });

  test('Wrong username and valid password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.gotoLogin(URLS.LOGIN_URL);
    await loginPage.login(
      testData.invalidUser.username,
      testData.validUser.password
    );

    await expect.soft(loginPage.errorMessage).toBeVisible();
    await expect.soft(loginPage.errorMessage).toContainText('Invalid credentials');
  });

});
