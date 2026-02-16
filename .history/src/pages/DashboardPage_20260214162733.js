import { Page } from '@playwright/test';

export default class DashboardPage {
  private page: Page;
  private dashboardHeader = '.oxd-topbar-header-title';

  constructor(page: Page) {
    this.page = page;
  }

  async getDashboardTitle() {
    return this.page.textContent(this.dashboardHeader);
  }
}
