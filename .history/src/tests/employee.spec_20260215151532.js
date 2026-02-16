import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import EmployeePage from '../pages/EmployeePage';
import { validCredentials } from '../fixtures/testData';

test.describe('Employee Management Test Cases', () => {

  test('Navigate to PIM Module', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const employeePage = new EmployeePage(page);

    await page.goto('/web/index.php/auth/login');

    await loginPage.enterUsername(validCredentials.username);
    await loginPage.enterPassword(validCredentials.password);
    await loginPage.submit();

    await employeePage.navigateToPIM();

    await expect(page).toHaveURL(/pim/);
  });

});
