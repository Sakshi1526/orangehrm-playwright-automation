import { test, expect } from '@playwright/test';

test('Add Employee and Update Details in OrangeHRM', async ({ page }) => {
  // 1. Login
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // 2. Navigate to PIM
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();

  // 3. Create Employee
  const firstName = 'Sakshi';
  const lastName = 'Shinde';
  const employeeId = Date.now().toString().slice(-6); // Unique ID to prevent "Already Exists" errors

  await page.getByPlaceholder('First Name').fill(firstName);
  await page.getByPlaceholder('Middle Name').fill('Suhas');
  await page.getByPlaceholder('Last Name').fill(lastName);
  
  // Use the unique ID
  await page.locator('form').getByRole('textbox').nth(4).fill(employeeId);
  
  await page.locator('.oxd-switch-input').click();
  await page.locator('form').getByRole('textbox').nth(5).fill(`user_${employeeId}`); 
  await page.locator('input[type="password"]').first().fill('Password123!');
  await page.locator('input[type="password"]').last().fill('Password123!');
  
  await page.getByRole('button', { name: 'Save' }).click();

  // Wait for the "Success" toast instead of just the URL
  await expect(page.getByText('Successfully Saved')).toBeVisible({ timeout: 15000 });
  
  // Now wait for the personal details page to load
  await page.waitForURL('**/viewPersonalDetails/**');

  // 4. Update Personal Details using a safer "Sibling" selector
  // This finds the label, then finds the dropdown container next to it
  const selectDropdown = async (labelName, optionText) => {
    await page.locator('.oxd-input-group', { has: page.locator(`label:has-text("${labelName}")`) })
              .locator('.oxd-select-wrapper').click();
    await page.getByRole('option', { name: optionText }).click();
  };

  await selectDropdown('Nationality', 'Indian');
  await selectDropdown('Marital Status', 'Single');

  // Save Personal Details section
  await page.locator('form').filter({ hasText: 'Employee Full Name' }).getByRole('button', { name: 'Save' }).first().click();
  await expect(page.getByText('Successfully Updated')).toBeVisible();

  // 5. Update Blood Type
  await selectDropdown('Blood Type', 'A+');
  await page.locator('form').filter({ hasText: 'Blood Type' }).getByRole('button', { name: 'Save' }).click();

  // 6. Qualifications
  await page.getByRole('link', { name: 'Qualifications' }).click();
  
  // Add Education
  await page.getByRole('button', { name: 'Add' }).first().click();
  await page.locator('.oxd-select-text').click();
  await page.getByRole('option', { name: "Bachelor's Degree" }).click();
  await page.locator('label:has-text("Institute")').parentElement().locator('input').fill('Pune University');
  await page.getByRole('button', { name: 'Save' }).click();

  await expect(page.getByText('Successfully Saved')).toBeVisible();
});