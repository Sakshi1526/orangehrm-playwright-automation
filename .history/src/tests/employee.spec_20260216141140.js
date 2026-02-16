import { test, expect } from '@playwright/test';

test.describe('OrangeHRM - Complete Employee Creation Flow', () => {

  test('Create Employee + Personal + Job + Qualification', async ({ page }) => {

    test.setTimeout(180000); // site slow aahe mhanun

    // ---------------- LOGIN ----------------
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await expect(page.getByRole('textbox', { name: 'Username' }))
      .toBeVisible({ timeout: 20000 });

    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.getByRole('heading', { name: 'Dashboard' }))
      .toBeVisible({ timeout: 20000 });

    // ---------------- PIM ----------------
    await page.getByRole('link', { name: 'PIM' }).click();
    await expect(page).toHaveURL(/pim/);

    await page.getByRole('link', { name: 'Add Employee' }).click();
    await expect(page).toHaveURL(/addEmployee/);

    // ---------------- ADD EMPLOYEE ----------------
    const uniqueUser = `sakshi${Date.now()}`;

    await page.getByRole('textbox', { name: 'First Name' }).fill('Sakshi');
    await page.getByRole('textbox', { name: 'Middle Name' }).fill('Suhas');
    await page.getByRole('textbox', { name: 'Last Name' }).fill('Shinde');

    await page.locator('.oxd-switch-input').click();

    await page.getByLabel('Username').fill(uniqueUser);
    await page.getByLabel('Password').fill('Password@123');
    await page.getByLabel('Confirm Password').fill('Password@123');

    await page.getByRole('button', { name: 'Save' }).click();

    await expect(page.getByRole('heading', { name: 'Personal Details' }))
      .toBeVisible({ timeout: 20000 });

    // ---------------- PERSONAL DETAILS ----------------
    await page.locator('.oxd-select-text').first().click();
    await page.getByText('Indian').click();

    await page.locator('.oxd-select-text').nth(1).click();
    await page.getByText('Single').click();

    await page.getByRole('button', { name: 'Save' }).first().click();

    await expect(page.getByText('Successfully Updated'))
      .toBeVisible({ timeout: 20000 });

    // ---------------- JOB DETAILS ----------------
    await page.getByRole('link', { name: 'Job' }).click();
    await expect(page.getByText('Job Details')).toBeVisible();

    await page.getByRole('button', { name: 'Save' }).click();

    await expect(page.getByText('Successfully Updated'))
      .toBeVisible({ timeout: 20000 });

    // ---------------- QUALIFICATIONS ----------------
    await page.getByRole('link', { name: 'Qualifications' }).click();

    await page.getByRole('button', { name: 'Add' }).first().click();

    await page.locator('.oxd-select-text').click();
    await page.getByText("Bachelor's Degree").click();

    await page.getByPlaceholder('Enter university').fill('Pune University');
    await page.getByPlaceholder('Enter specialization').fill('MBA');

    await page.getByRole('button', { name: 'Save' }).click();

    await expect(page.getByText('Successfully Saved'))
      .toBeVisible({ timeout: 20000 });

  });

});
