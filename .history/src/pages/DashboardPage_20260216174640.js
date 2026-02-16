export class DashboardPage {
    constructor(page) {
        this.page = page;
        this.adminLink = page.getByRole('link', { name: 'Admin' });
        this.recruitmentLink = page.getByRole('link', { name: 'Recruitment' });
        this.vacanciesLink = page.getByRole('link', { name: 'Vacancies' });
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.dropdownArrow = page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first();
    }

    async navigateToAdmin() {
        await this.adminLink.click();
    }

    async navigateToRecruitment() {
        await this.recruitmentLink.click();
    }

    async selectDropdownValue(value) {
        await this.dropdownArrow.click();
        await this.page.getByRole('listbox').getByText(value).click();
    }
}