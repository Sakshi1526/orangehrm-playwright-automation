import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import { validCredentials, invalidCredentials } from '../fixtures/testData';
import { LOGIN_URL } from '../utils/constants';

test.describe('Login Functionality', () => {

  test('Login with accurate username and password', async ({ page }) => {
    await page.goto(LOGIN_URL);

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.enterUsername(validCredentials.username);
    await loginPage.enterPassword(validCredentials.password);
    await loginPage.submit();

    const title = await dashboardPage.getDashboardTitle();
    expect(title).toContain('Dashboard');
  });

  test('Login with accurate username and wrong password', async ({ page }) => {
    await page.goto(LOGIN_URL);

    const loginPage = new LoginPage(page);

    await loginPage.enterUsername(validCredentials.username);
    await loginPage.enterPassword(invalidCredentials.wrongPassword);
    await loginPage.submit();

    const error = await loginPage.getErrorMessage();
    expect(error).toContain('Invalid credentials');
  });

  test('Login with wrong username and accurate password', async ({ page }) => {
    await page.goto(LOGIN_URL);

    const loginPage = new LoginPage(page);

    await loginPage.enterUsername(invalidCredentials.wrongUsername);
    await loginPage.enterPassword(validCredentials.password);
    await loginPage.submit();

    const error = await loginPage.getErrorMessage();
    expect(error).toContain('Invalid credentials');
  });

  test('Login with empty username and password', async ({ page }) => {
    await page.goto(LOGIN_URL);

    const loginPage = new LoginPage(page);
    await loginPage.submit();

    await expect(page.locator('input[name="username"]')).toBeVisible();
  });

});
