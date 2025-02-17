const { LoginPage } = require('../page-objects/LoginPage');
const { DashboardPage } = require('../page-objects/DashboardPage');

//PageObjectManager class for creating page objects
class PageObjectManager {
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
    }

    getLoginPage() {
        return this.loginPage;
    }

    getDashboardPage() {
        return this.dashboardPage;
    }
}
module.exports = { PageObjectManager }