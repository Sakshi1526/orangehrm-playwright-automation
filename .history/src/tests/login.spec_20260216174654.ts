import { test, expect } from '../fixtures/test.data.spec.js';
import { URLS, CREDENTIALS } from '../utils/constants';

test.describe('OrangeHRM Login Tests', () => {
    
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.navigate(URLS.login);
    });

    test('Login with valid credentials', async ({ loginPage, page }) => {
        await loginPage.login(CREDENTIALS.validUser, CREDENTIALS.validPassword);
        await expect(page).toHaveURL(/dashboard/);
    });

    test('Empty username and password', async ({ loginPage }) => {
        await loginPage.login('', '');
        await expect(loginPage.requiredMessage.first()).toBeVisible();
        await expect(loginPage.requiredMessage.first()).toHaveText('Required');
    });
});