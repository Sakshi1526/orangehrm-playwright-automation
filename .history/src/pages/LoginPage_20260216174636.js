export class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.errorMessage = page.locator('.oxd-alert-content-text');
        this.requiredMessage = page.locator('.oxd-input-field-error-message');
    }

    async navigate(url) {
        await this.page.goto(url);
    }

    async login(username, password) {
        if (username) await this.usernameInput.fill(username);
        if (password) await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}