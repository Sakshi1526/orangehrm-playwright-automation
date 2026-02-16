import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import { validCredentials } from '../fixtures/testData';

test.describe('Dashboard Test Cases', () => {

  test('Verify Dashboard is visible after login', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await page.goto('/web/index.php/auth/login');

    await loginPage.enterUsername(validCredentials.username);
    await loginPage.enterPassword(validCredentials.password);
    await loginPage.submit();

    const title = await dashboardPage.getDashboardTitle();
    expect(title).toContain('Dashboard');
  });

});
