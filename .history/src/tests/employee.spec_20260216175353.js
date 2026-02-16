import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { EmployeePage } from '../pages/EmployeePage';
import { testData } from '../fixtures/testData';
import { URLS } from '../utils/constants';

test('Employee Flow', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const employeePage = new EmployeePage(page);

  await loginPage.gotoLogin(URLS.LOGIN_URL);
  await loginPage.login(
    testData.validUser.username,
    testData.validUser.password
  );

  await employeePage.openPIM();
  await employeePage.clickAddEmployee();

  await expect(page).toHaveURL(/addEmployee/);

});
