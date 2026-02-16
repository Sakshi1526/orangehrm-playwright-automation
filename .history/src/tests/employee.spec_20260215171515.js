import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //await page.pause();
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();


    await page.getByRole('link', { name: 'PIM' }).click();
    await page.getByRole('link', { name: 'Add Employee' }).click();
    await page.getByRole('textbox', { name: 'First Name' }).fill('Sakshi');
    await page.getByRole('textbox', { name: 'Middle Name' }).fill('Suhas');
    await page.getByRole('textbox', { name: 'Last Name' }).fill('Shinde');
    await page.getByRole('textbox').nth(4).fill('103151');
    await page.locator('.oxd-switch-input').click();
    await page.getByRole('textbox').nth(5).fill('sakshi123');
    await page.locator('input[type="password"]').first().fill('2003sakshi');
    await page.locator('input[type="password"]').nth(1).fill('2003sakshi');
    await page.getByRole('button', { name: 'Save' }).click();

    await page.pause()
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/184');

    await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();
    await page.getByText('Indian').click();
    await page.locator('div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
    await page.getByText('Single').click();
    await page.locator('div:nth-child(5) > div:nth-child(2) > div > .oxd-input-group > div:nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon').click();
    await page.getByText('2026', { exact: true }).click();
    await page.getByText('2003').click();
    await page.getByText('26', { exact: true }).click();
    await page.locator('div:nth-child(2) > div:nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input').click();
    await page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).getByRole('button').click();
    await page.locator('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > div > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
    await page.getByText('A+').click();
    await page.locator('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-input').click();
    await page.locator('.oxd-input.oxd-input--focus').fill('9359272459');
    await page.locator('form').filter({ hasText: 'Blood TypeA+Emergency Contact' }).getByRole('button').click();

    await page.getByRole('link', { name: 'Contact Details' }).click();
    await page.getByRole('textbox').nth(1).fill('aundh');
    await page.getByRole('textbox').nth(3).fill('pune');
    await page.getByRole('textbox').nth(4).fill('maharashtra');
    await page.getByRole('textbox').nth(5).fill('411008');
    await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').click();
    await page.getByText('India', { exact: true }).click();
    await page.locator('div:nth-child(6) > .oxd-grid-3 > div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-input').click();
    await page.locator('.oxd-input.oxd-input--focus').fill('9836278278');
    await page.locator('div:nth-child(9) > .oxd-grid-3 > div > .oxd-input-group > div:nth-child(2) > .oxd-input').first().click();
    await page.locator('.oxd-input.oxd-input--focus').fill('sakshi123@gmail.com');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('button', { name: ' Add' }).click();
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.getByRole('link', { name: 'Emergency Contacts' }).click();
    await page.getByRole('button', { name: ' Add' }).first().click();

    await page.getByRole('textbox').nth(1).fill('Darshan');

    await page.getByRole('textbox').nth(2).fill('brother');

    await page.getByRole('textbox').nth(4).fill('981768898');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.locator('.oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click();
    await page.locator('.oxd-checkbox-input.oxd-checkbox-input--focus > .oxd-icon').click();
    await page.getByRole('link', { name: 'Dependents' }).click();
    await page.getByRole('link', { name: 'Immigration' }).click();
    await page.getByRole('button', { name: ' Add' }).first().click();

    await page.getByRole('textbox').nth(1).fill('243435');
    await page.locator('.oxd-icon.bi-calendar').first().click();
    await page.getByText('15').click();
    await page.locator('.oxd-icon.bi-calendar').first().click();
    await page.getByText('4', { exact: true }).click();
    await page.locator('div:nth-child(3) > .oxd-input-group > div:nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon').click();
    await page.locator('.oxd-calendar-selector-year-selected > .oxd-icon').click();
    await page.getByText('2046').click();
    await page.getByText('13').click();
    await page.getByRole('textbox').nth(4).click();
    await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').click();
    await page.getByText('Iceland').click();
    await page.locator('div:nth-child(6) > .oxd-input-group > div:nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon').click();
    await page.locator('.oxd-calendar-selector-year-selected > .oxd-icon').click();
    await page.getByText('2024').click();
    await page.getByText('19').click();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('link', { name: 'Job' }).click();
    await page.locator('.oxd-icon.bi-calendar').click();
    await page.getByText('2026', { exact: true }).click();
    await page.getByText('2025').click();
    await page.locator('div').filter({ hasText: /^February$/ }).click();
    await page.getByText('September').click();
    await page.getByText('10').click();
    await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();
    await page.getByText('Automaton Tester').click();
    await page.locator('div:nth-child(4) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
    await page.getByText('Professionals').click();
    await page.locator('div:nth-child(5) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
    await page.getByText('Quality Assurance').click();
    await page.locator('div:nth-child(6) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
    await page.getByText('Texas R&D').click();
    await page.locator('div:nth-child(7) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
    await page.getByText('Full-Time Permanent').click();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('link', { name: 'Salary' }).click();
    await page.getByRole('button', { name: ' Add' }).first().click();

    await page.getByRole('textbox').nth(1).fill('basic');
    await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();
    await page.getByRole('option', { name: 'Grade 1' }).click();
    await page.locator('div:nth-child(3) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
    await page.getByText('Monthly', { exact: true }).click();
    await page.locator('div:nth-child(4) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
    await page.getByText('United States Dollar').click();

    await page.getByRole('textbox').nth(2).fill('50000');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('link', { name: 'Report-to' }).click();
    await page.getByRole('link', { name: 'Qualifications' }).click();
    await page.getByRole('button', { name: ' Add' }).first().click();

    await page.getByRole('textbox').nth(1).fill('persistent');

    await page.getByRole('textbox').nth(2).fill('Quality engineer');
    await page.locator('.oxd-icon.bi-calendar').first().click();
    await page.getByText('2026', { exact: true }).click();
    await page.getByText('2025').click();
    await page.locator('div').filter({ hasText: /^February$/ }).click();
    await page.getByText('September').click();
    await page.getByText('10').click();
    await page.locator('div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon').click();
    await page.getByText('2026', { exact: true }).click();
    await page.getByRole('menu').getByText('2026').click();
    await page.getByText('18').click();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('button', { name: ' Add' }).nth(1).click();
    await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').click();
    await page.getByText('Bachelor\'s Degrees').click();

    await page.getByRole('textbox').nth(1).fill('Pune University');

    await page.getByRole('textbox').nth(3).fill('2025');

    await page.getByRole('textbox').nth(4).fill('A');

    await page.getByRole('textbox').nth(2).fill('software engineer');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('button', { name: ' Add' }).nth(3).click();
    await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();
    await page.getByText('English').click();
    await page.locator('div:nth-child(2) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
    await page.getByRole('option', { name: 'Speaking' }).click();
    await page.locator('div:nth-child(3) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
    await page.getByText('Good').click();
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('button', { name: ' Add' }).nth(2).click();
    await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').click();
    await page.getByText('Java', { exact: true }).click();
    await page.locator('form input').click();
    await page.locator('form input').fill('1');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('link', { name: 'Memberships' }).click();


});