import { test, expect } from '@playwright/test';

test('OrangeHRM - Add Employee Stable Test', async ({ page }) => {

  test.setTimeout(120000); // slow site support

  // ---------- LOGIN ----------
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {
    waitUntil: 'networkidle'
  });

  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.waitForURL('**/dashboard/**', { timeout: 30000 });

  // ---------- GO TO PIM ----------
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.waitForURL('**/pim/**');

  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.waitForURL('**/addEmployee');

  // ---------- ADD EMPLOYEE ----------
  await page.getByPlaceholder('First Name').fill('Sakshi');
  await page.getByPlaceholder('Middle Name').fill('Suhas');
  await page.getByPlaceholder('Last Name').fill('Shinde');

  await page.getByRole('button', { name: 'Save' }).click();

  // ---------- VERIFY ----------
  await page.waitForURL('**/viewPersonalDetails/**', { timeout: 30000 });

  await expect(page.getByText('Personal Details')).toBeVisible();

});
