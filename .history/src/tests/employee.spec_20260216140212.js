import { test, expect } from '@playwright/test';

test('Full Employee Flow Stable', async ({ page }) => {

  // Increase timeout for slow site
  test.setTimeout(180000);

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.waitForLoadState('networkidle');

  // Login
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');

  await Promise.all([
    page.waitForURL('**/dashboard/**'),
    page.getByRole('button', { name: 'Login' }).click()
  ]);

  // Click PIM
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.waitForLoadState('networkidle');

  // Add Employee
  await page.getByRole('button', { name: 'Add' }).click();
  await page.waitForURL('**/addEmployee');

  await page.getByPlaceholder('First Name').fill('Sakshi');
  await page.getByPlaceholder('Middle Name').fill('Suhas');
  await page.getByPlaceholder('Last Name').fill('Shinde');

  // Create Login Details
  await page.locator('.oxd-switch-input').click();

  await page.locator('input').nth(5).fill('sakshi12');
  await page.locator('input[type="password"]').first().fill('2003sakshi');
  await page.locator('input[type="password"]').nth(1).fill('2003sakshi');

  await Promise.all([
    page.waitForURL('**/viewPersonalDetails/**'),
    page.getByRole('button', { name: 'Save' }).click()
  ]);

  await page.waitForLoadState('networkidle');

  // ---------- PERSONAL DETAILS ----------

  // Nationality
  await page.locator('.oxd-select-text').first().click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Indian' }).click();

  // Marital Status
  await page.locator('.oxd-select-text').nth(1).click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: 'Single' }).click();

  // Date of Birth
  await page.locator('input[placeholder="yyyy-mm-dd"]').first().fill('2003-02-26');

  // Gender
  await page.getByLabel('Female').click();

  await page.getByRole('button', { name: 'Save' }).first().click();
  await page.waitForLoadState('networkidle');

  // ---------- JOB DETAILS ----------

  await page.getByRole('link', { name: 'Job' }).click();
  await page.waitForLoadState('networkidle');

  // Job Title
  await page.locator('.oxd-select-text').first().click();
  await page.waitForTimeout(1000);
  await page.getByRole('option').nth(1).click();

  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForLoadState('networkidle');

  // ---------- QUALIFICATIONS ----------

  await page.getByRole('link', { name: 'Qualifications' }).click();
  await page.waitForLoadState('networkidle');

  await page.getByRole('button', { name: 'Add' }).first().click();

  await page.locator('.oxd-select-text').click();
  await page.waitForTimeout(1000);
  await page.getByRole('option', { name: "Bachelor's Degree" }).click();

  await page.getByRole('textbox').nth(1).fill('Pune University');
  await page.getByRole('textbox').nth(2).fill('MBA');

  await page.getByRole('button', { name: 'Save' }).click();

});
