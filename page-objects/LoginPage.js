class LoginPage {

    constructor(page) {
        //using this keyword to make class variable
        this.page = page;
        this.signInButton = page.locator("button[type='submit']");
        this.username = page.locator("input#username");
        this.password = page.locator("input#password");
    }

    async validLogin(username, password) {
        //using this keyword to refer to class' variable
        await this.username.fill(username);
        await this.password.fill(password);
        await this.signInButton.click();
    }

    async goTo() {
        await this.page.goto("https://animated-gingersnap-8cf7f2.netlify.app/");
    }
}
module.exports = { LoginPage };