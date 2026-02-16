import { test, expect } from '@playwright/test';

test('Full Employee Flow - Stable Version', async ({ page }) => {

  // ================= LOGIN =================
  await page.goto('/web/index.php/auth/login', {
    waitUntil: 'networkidle'
  });

  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');

  await Promise.all([
    page.waitForURL('**/dashboard/**'),
    page.getByRole('button', { name: 'Login' }).click()
  ]);

  await expect(page.getByText('Dashboard')).toBeVisible();

  // ================= PIM =================
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.waitForURL('**/pim/**');

  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.waitForURL('**/addEmployee');

  // ================= ADD EMPLOYEE =================
  await page.getByRole('textbox', { name: 'First Name' }).fill('Sakshi');
  await page.getByRole('textbox', { name: 'Middle Name' }).fill('Suhas');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Shinde');

  // Enable login details
  await page.locator('.oxd-switch-input').click();

  const uniqueUser = `sakshi${Date.now()}`;

  await page.getByRole('textbox').nth(5).fill(uniqueUser);
  await page.locator('input[type="password"]').first().fill('Password@123');
  await page.locator('input[type="password"]').nth(1).fill('Password@123');

  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForURL('**/viewPersonalDetails/**');

  await expect(page.getByText('Personal Details')).toBeVisible();

  // ================= PERSONAL DETAILS =================

  // Select Date of Birth
  await page.locator('.oxd-date-input input').nth(1).fill('2003-02-26');

  // Select Gender (Female)
  await page.getByRole('radio').nth(1).click();

  await page.getByRole('button', { name: 'Save' }).first().click();

  // ================= JOB TAB =================
  await page.getByRole('link', { name: 'Job' }).click();
  await page.waitForURL('**/viewJobDetails/**');

  await expect(page.getByText('Job Details')).toBeVisible();

  // ================= QUALIFICATIONS TAB =================
  await page.getByRole('link', { name: 'Qualifications' }).click();
  await expect(page.getByText('Work Experience')).toBeVisible();

  // ---- Add Education ----
  await page.getByRole('button', { name: 'Add' }).first().click();

  await page.locator('.oxd-select-text').first().click();
  await page.getByText("Bachelor's Degree").click();

  await page.getByRole('textbox').nth(1).fill('Pune University');
  await page.getByRole('textbox').nth(2).fill('MBA');

  await page.getByRole('button', { name: 'Save' }).click();

  // ---- Add Language ----
  await page.getByRole('button', { name: 'Add' }).nth(1).click();

  await page.locator('.oxd-select-text').first().click();
  await page.getByText('English').click();

  await page.locator('.oxd-select-text').nth(1).click();
  await page.getByText('Speaking').click();

  await page.locator('.oxd-select-text').nth(2).click();
  await page.getByText('Basic').click();

  await page.getByRole('button', { name: 'Save' }).click();

  await expect(page.getByText('English')).toBeVisible();

});
