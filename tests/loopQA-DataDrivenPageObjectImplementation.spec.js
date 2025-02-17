const { test, expect } = require('@playwright/test');
const { PageObjectManager } = require('../page-objects/PageObjectManager');
const dataset = JSON.parse(JSON.stringify(require('../utils/loopQA-Testdata.json')));


for (const data of dataset) {
    test(`LoopQA Authentication Demo for ${data.desiredTicketName}`, async ({ page }) => {
        //creating page object manager and passing page value as an argument
        const poManager = new PageObjectManager(page);

        //retrieving page objects from poManager class
        const loginPage = poManager.getLoginPage();
        const dashboardPage = poManager.getDashboardPage();

        //go to url
        await loginPage.goTo();
        //login and click sign in
        await loginPage.validLogin(data.username, data.password);
        //go to desired tab
        await dashboardPage.goToDesiredTab(data.desiredTabName);
        //search & assert desired column, ticket, tags
        await dashboardPage.searchTickets(data.desiredColumnName, data.desiredTicketName, data.desiredTicketTagName1, data.desiredTicketTagName2);
    });
}
