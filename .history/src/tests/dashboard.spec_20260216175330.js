import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { testData } from '../fixtures/testData';
import { URLS } from '../utils/constants';

test('Dashboard Flow', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.gotoLogin(URLS.LOGIN_URL);
  await loginPage.login(
    testData.validUser.username,
    testData.validUser.password
  );

  await expect(dashboardPage.dashboardHeading).toBeVisible();
  await dashboardPage.clickAdmin();
  await expect(page).toHaveURL(/admin/);

});
