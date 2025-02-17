const { expect } = require('@playwright/test');

class DashboardPage {
    constructor(page) {
        this.page = page;
        this.columnEle = page.locator("div[class*='w-80']");
        this.columnTitlesWaitForEle = page.locator("div h2[class*='mb-4']");
        this.tagWaitFor = page.locator('.px-2.py-1');

        this.tabButtonTitles = page.locator('button h2');

        this.columnTitleLocator = "h2";
        this.ticketTitleLocator = "h3[class*='mb-2']";
        this.tagTitleLocator1 = ".bg-white";
        this.tagTitleLocator2 = ".px-2";


    }

    async goToDesiredTab(desiredTabName) {
        const countOfTabs = await this.tabButtonTitles.count();
        for (let i = 0; i < countOfTabs; i++) {
            const tabWeAreOn = await this.tabButtonTitles.nth(i).textContent();
            if (tabWeAreOn.includes(desiredTabName)) {
                await this.tabButtonTitles.nth(i).click();
                await this.columnTitlesWaitForEle.last().waitFor();
                await this.tagWaitFor.last().waitFor();
                console.log(await this.tabButtonTitles.nth(i).textContent() + " is the Tab we are on");
            }
        }
    }

    async searchTickets(desiredColumnName, desiredTicketName, desiredTicketTagName1, desiredTicketTagName2) {
        //waiting for last title to appear on page
        await this.columnTitlesWaitForEle.last().waitFor();
        await this.tagWaitFor.last().waitFor();

        const countOfColumnElements = await this.columnEle.count();
        //iterating over columns
        for (let i = 0; i < countOfColumnElements; i++) {

            const columnNameTitleWeAreOn = await this.columnEle.nth(i).locator(this.columnTitleLocator).textContent();
            if (columnNameTitleWeAreOn.includes(desiredColumnName)) {
                console.log(await this.columnEle.nth(i).locator(this.columnTitleLocator).textContent() + " is the column we are currently on");
                //asserting column name matches desired column name 
                expect(await columnNameTitleWeAreOn.includes(desiredColumnName)).toBeTruthy();



                const countOfTickets = await this.columnEle.nth(i).locator(this.ticketTitleLocator).count();
                //iterating over each ticket inside desired column
                for (let k = 0; k < countOfTickets; k++) {
                    if (await this.columnEle.nth(i).locator(this.ticketTitleLocator).nth(k).textContent() === desiredTicketName) {
                        console.log(await this.columnEle.nth(i).locator(this.ticketTitleLocator).nth(k).textContent() + " is the title of the ticket we are currently on");
                        //asserting ticket name matches desired ticket name
                        await expect(this.columnEle.nth(i).locator(this.ticketTitleLocator).nth(k)).toHaveText(desiredTicketName)


                        const countOfTags = await this.columnEle.nth(i).locator(this.tagTitleLocator1).nth(k).locator(this.tagTitleLocator2).count();
                        //iterating over each tag element inside ticket
                        for (let j = 0; j < countOfTags; j++) {
                            if (countOfTags == 1) {
                                //asserting one tag 
                                expect(await this.columnEle.nth(i).locator(this.tagTitleLocator1).nth(k).locator(this.tagTitleLocator2).nth(j)).toHaveText(desiredTicketTagName1);
                                console.log(await this.columnEle.nth(i).locator(this.tagTitleLocator1).nth(k).locator(this.tagTitleLocator2).nth(j).textContent() + " is tag name of ticket we are currently on");
                            } else if (countOfTags <= 2) {
                                //asserting two tags
                                expect(await this.columnEle.nth(i).locator(this.tagTitleLocator1).nth(k).locator(this.tagTitleLocator2).nth(j)).toHaveText(desiredTicketTagName1);
                                console.log(await this.columnEle.nth(i).locator(this.tagTitleLocator1).nth(k).locator(this.tagTitleLocator2).nth(j).textContent() + " is tag name #1 of ticket we are currently on");
                                j++;
                                expect(await this.columnEle.nth(i).locator(this.tagTitleLocator1).nth(k).locator(this.tagTitleLocator2).nth(j)).toHaveText(desiredTicketTagName2);
                                console.log(await this.columnEle.nth(i).locator(this.tagTitleLocator1).nth(k).locator(this.tagTitleLocator2).nth(j).textContent() + " is tag name #2 of ticket we are currently on");
                            }
                        }
                    }
                }



            }
        }
    }
}
module.exports = { DashboardPage };