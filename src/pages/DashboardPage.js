export class DashboardPage {
  constructor(page) {
    this.page = page;
    this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard' });
    this.adminMenu = page.getByRole('link', { name: 'Admin' });
    this.recruitmentMenu = page.getByRole('link', { name: 'Recruitment' });
    this.dashboardMenu = page.getByRole('link', { name: 'Dashboard' });
  }

  async clickAdmin() {
    await this.adminMenu.click();
  }

  async clickRecruitment() {
    await this.recruitmentMenu.click();
  }

  async clickDashboard() {
    await this.dashboardMenu.click();
  }
}
