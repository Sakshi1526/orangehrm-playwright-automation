import { test, expect } from '@playwright/test';

test('Add Employee and Qualifications', async ({ page }) => {
  // 1. Login
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // 2. Add Employee
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee');
  await page.getByRole('textbox', { name: 'First Name' }).fill('Sakshi');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Shinde');
  
  // Using a more reliable way to find the Employee ID field
  await page.locator('form').getByRole('textbox').nth(4).fill('10234');
  
  // Enable Login Details switch
  await expect(page.locator('.oxd-switch-input')).toBeVisible();
  await page.locator('.oxd-switch-input').click();

  // Fill Login Credentials
  await page.getByRole('textbox').nth(5).fill('sakshi123');
  await page.locator('input[type="password"]').first().fill('23sakshi');
  await page.locator('input[type="password"]').nth(1).fill('23sakshi');
  
  // Save and wait for navigation/success
  await page.getByRole('button', { name: 'Save' }).click();
  
  // 3. Navigate to Qualifications (Handling the dynamic URL)
  // Instead of hardcoded ID 170, we wait for the page to load the new employee
  await page.getByRole('link', { name: 'Qualifications' }).click();

  // 4. Add Education
  await page.getByRole('button', { name: 'Add' }).first().click();
  await page.locator('.oxd-select-text').click();
  await page.getByRole('option', { name: "Bachelor's Degree" }).click();
  await page.getByRole('textbox').nth(1).fill('Pune University');
  await page.getByRole('button', { name: 'Save' }).click();

  // 5. Add Language (This is where your error occurred)
  // We target the 'Add' button specifically in the Languages section
  await page.locator('xpath=//h6[text()="Languages"]/following-sibling::button').click();
  
  // Select Language: English
  await page.locator('.oxd-select-text').first().click();
  await page.getByRole('option', { name: 'English' }).click();

  // Select Fluency: Writing
  await page.locator('.oxd-input-group', { hasText: 'Fluency' }).locator('.oxd-select-text').click();
  await page.getByRole('option', { name: 'Writing' }).click();

  // Select Competency: Good (FIXED: Targeting the option inside the listbox)
  await page.locator('.oxd-input-group', { hasText: 'Competency' }).locator('.oxd-select-text').click();
  await page.getByRole('listbox').getByText('Good', { exact: true }).click();

  // Final Save
  await page.getByRole('button', { name: 'Save' }).first().click();
  
  // Validation
  await expect(page.getByText('Successfully Saved')).toBeVisible();
});