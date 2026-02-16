import { Page } from '@playwright/test';

export default class EmployeePage {
  private page: Page;
  private pimMenu = '//span[text()="PIM"]';

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToPIM() {
    await this.page.click(this.pimMenu);
  }
}
