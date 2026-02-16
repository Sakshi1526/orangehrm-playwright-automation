import { test, expect } from '@playwright/test';

test('Add Employee and Update Details in OrangeHRM', async ({ page }) => {
  // 1. Login
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
  // Using more robust selectors for login
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // 2. Navigate to PIM - Add Employee
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();

  // 3. Fill Employee Personal Info
  await page.getByPlaceholder('First Name').fill('Sakshi');
  await page.getByPlaceholder('Middle Name').fill('Suhas');
  await page.getByPlaceholder('Last Name').fill('Shinde');
  
  // Toggle Login Details
  await page.locator('.oxd-switch-input').click();
  
  // Use specific labels or placeholders instead of .nth() for stability
  await page.locator('form').getByRole('textbox').nth(4).fill('sakshi_user_unique'); // Username
  await page.locator('input[type="password"]').first().fill('Password123!');
  await page.locator('input[type="password"]').last().fill('Password123!');
  
  await page.getByRole('button', { name: 'Save' }).click();

  // Wait for navigation/success toast
  await page.waitForURL('**/viewPersonalDetails/**');

  // 4. Update Personal Details (Nationality, Marital Status, DOB)
  // Selecting from OrangeHRM custom dropdowns
  await page.locator('label:has-text("Nationality")').parentElement().locator('.oxd-select-wrapper').click();
  await page.getByRole('option', { name: 'Indian' }).click();

  await page.locator('label:has-text("Marital Status")').parentElement().locator('.oxd-select-wrapper').click();
  await page.getByRole('option', { name: 'Single' }).click();

  // Blood Type Section
  await page.locator('label:has-text("Blood Type")').parentElement().locator('.oxd-select-wrapper').click();
  await page.getByRole('option', { name: 'A+' }).click();

  // Clicking the Save button for the second section specifically
  await page.locator('form').filter({ hasText: 'Blood Type' }).getByRole('button', { name: 'Save' }).click();

  // 5. Qualifications
  await page.getByRole('link', { name: 'Qualifications' }).click();
  
  // Add Education
  await page.getByRole('button', { name: 'Add' }).first().click();
  await page.locator('.oxd-select-text').click();
  await page.getByRole('option', { name: "Bachelor's Degree" }).click();
  await page.locator('label:has-text("Institute")').parentElement().locator('input').fill('Pune University');
  await page.getByRole('button', { name: 'Save' }).click();

  // Add Language
  await page.getByRole('button', { name: 'Add' }).nth(2).click(); // Use index if multiple Add buttons exist
  await page.locator('.oxd-select-text').first().click();
  await page.getByRole('option', { name: 'English' }).click();
  await page.getByRole('button', { name: 'Save' }).click();

  // Verification
  await expect(page.getByText('Successfully Saved')).toBeVisible();
});