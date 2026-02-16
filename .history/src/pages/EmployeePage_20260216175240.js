export class EmployeePage {
  constructor(page) {
    this.page = page;
    this.myInfoMenu = page.getByRole('link', { name: 'My Info' });
    this.pimMenu = page.getByRole('link', { name: 'PIM' });
    this.addButton = page.getByRole('button', { name: ' Add' });
  }

  async openMyInfo() {
    await this.myInfoMenu.click();
  }

  async openPIM() {
    await this.pimMenu.click();
  }

  async clickAddEmployee() {
    await this.addButton.click();
  }
}
