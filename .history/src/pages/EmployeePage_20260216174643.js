export class EmployeePage {
    constructor(page) {
        this.page = page;
        this.myInfoLink = page.getByRole('link', { name: 'My Info' });
        this.pimLink = page.getByRole('link', { name: 'PIM' });
        this.addButton = page.getByRole('button', { name: ' Add' });
        this.firstName = page.getByRole('textbox', { name: 'First Name' });
        this.lastName = page.getByRole('textbox', { name: 'Last Name' });
        this.saveButton = page.locator('form').filter({ hasText: 'Employee Full Name' }).getByRole('button');
    }

    async updateMyInfo(fName, lName) {
        await this.myInfoLink.dblclick();
        await this.firstName.fill(fName);
        await this.lastName.fill(lName);
        await this.saveButton.click();
    }

    async addNewEmployee(fName, lName) {
        await this.pimLink.click();
        await this.addButton.click();
        await this.firstName.fill(fName);
        await this.lastName.fill(lName);
    }
}