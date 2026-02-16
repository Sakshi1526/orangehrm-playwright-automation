import { test, expect } from '@playwright/test';

test.describe('OrangeHRM Login Soft Assertion Tests', () => {

  test('TC01 - Login with valid username and valid password', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    // Soft Assertions
    await expect.soft(page).toHaveURL(/dashboard/);

    await expect.soft(
      page.getByRole('heading', { name: 'Dashboard' })
    ).toBeVisible();

  });


  test('TC02 - Valid username and wrong password', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('wrong123');
    await page.getByRole('button', { name: 'Login' }).click();

    const errorMessage = page.locator('.oxd-alert-content-text');

    await expect.soft(errorMessage).toBeVisible();
    await expect.soft(errorMessage).toContainText('Invalid credentials');

  });


  test('TC03 - Wrong username and valid password', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByRole('textbox', { name: 'Username' }).fill('WrongUser');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    const errorMessage = page.locator('.oxd-alert-content-text');

    await expect.soft(errorMessage).toBeVisible();
    await expect.soft(errorMessage).toContainText('Invalid credentials');

  });


  test('TC04 - Empty username and password', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByRole('button', { name: 'Login' }).click();

    const requiredMessage = page.locator('.oxd-input-field-error-message');

    await expect.soft(requiredMessage.first()).toBeVisible();
    await expect.soft(requiredMessage.first()).toContainText('Required');

  });


  test('TC05 - Valid username and empty password', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('button', { name: 'Login' }).click();

    const requiredMessage = page.locator('.oxd-input-field-error-message');

    await expect.soft(requiredMessage).toBeVisible();
    await expect.soft(requiredMessage).toContainText('Required');

  });

});
