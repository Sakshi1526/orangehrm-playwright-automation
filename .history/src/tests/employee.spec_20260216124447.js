import { test, expect } from '@playwright/test';

test('Full Employee Flow - Stable Final Version', async ({ page }) => {

  // ================= LOGIN =================
  await page.goto('/web/index.php/auth/login', {
    waitUntil: 'networkidle'
  });

  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');

  await Promise.all([
    page.waitForURL('**/dashboard/**'),
    page.getByRole('button', { name: 'Login' }).click()
  ]);

  await expect(page).toHaveURL(/dashboard/);

  // ================= PIM =================
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.waitForURL('**/pim/**');

  // ================= ADD EMPLOYEE =================
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.waitForURL('**/addEmployee');

  await page.getByPlaceholder('First Name').fill('Sakshi');
  await page.getByPlaceholder('Middle Name').fill('Suhas');
  await page.getByPlaceholder('Last Name').fill('Shinde');

  // Enable Login Details
  await page.locator('.oxd-switch-input').click();

  const uniqueUser = `sakshi${Date.now()}`;

  const usernameField = page.locator('input.oxd-input').nth(5);
  await usernameField.fill(uniqueUser);

  const passwordFields = page.locator('input[type="password"]');
  await passwordFields.first().fill('Password@123');
  await passwordFields.nth(1).fill('Password@123');

  await page.getByRole('button', { name: 'Save' }).click();

  await page.waitForURL('**/viewPersonalDetails/**');

  await expect(
    page.getByRole('heading', { name: 'Personal Details' })
  ).toBeVisible();

  // ================= PERSONAL DETAILS =================

  // Set DOB directly (more stable than calendar clicking)
  await page.locator('input[placeholder="yyyy-mm-dd"]').nth(1)
    .fill('2003-02-26');

  // Select Gender (Female)
  await page.getByRole('radio').nth(1).check();

  await page.getByRole('button', { name: 'Save' }).first().click();

  // ================= JOB TAB =================
  await page.getByRole('link', { name: 'Job' }).click();
  await page.waitForURL('**/viewJobDetails/**');

  await expect(
    page.getByRole('heading', { name: 'Job Details' })
  ).toBeVisible();

  // ================= QUALIFICATIONS TAB =================
  await page.getByRole('link', { name: 'Qualifications' }).click();

  await expect(page.getByText('Work Experience')).toBeVisible();

  // -------- Add Education --------
  await page.getByRole('button', { name: 'Add' }).first().click();

  await page.locator('.oxd-select-text').first().click();
  await page.getByText("Bachelor's Degree", { exact: true }).click();

  const instituteField = page.locator('input.oxd-input').nth(1);
  await instituteField.fill('Pune University');

  const majorField = page.locator('input.oxd-input').nth(2);
  await majorField.fill('MBA');

  await page.getByRole('button', { name: 'Save' }).click();

  // -------- Add Language --------
  await page.getByRole('button', { name: 'Add' }).nth(1).click();

  await page.locator('.oxd-select-text').first().click();
  await page.getByText('English', { exact: true }).click();

  await page.locator('.oxd-select-text').nth(1).click();
  await page.getByText('Speaking', { exact: true }).click();

  await page.locator('.oxd-select-text').nth(2).click();
  await page.getByText('Basic', { exact: true }).click();

  await page.getByRole('button', { name: 'Save' }).click();

  await expect(page.getByText('English')).toBeVisible();

});
