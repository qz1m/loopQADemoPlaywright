///////IGNORE THIS FILE ***********************************************************************
/*
const {test, expect} = require('@playwright/test');

test('LoopQA Authentication Demo', async ({page})=> 
{   
    const desiredColumnName = "To Do";
    const desiredTicketName = "Fix navigation bug";
    const desiredTicketTagName1 = "Bug";
    const desiredTicketTagName2 = "High Priority";

    const userName = page.locator("input#username");
    const password = page.locator("input#password");
    const submitButton = page.locator("button[type='submit']");

    const columnEle = page.locator("div[class*='w-80']");
    const columnTitles = page.locator("div h2[class*='mb-4']"); 
    const ticketTitlesEle = page.locator("h3[class*='mb-2']");

    //go to url
    await page.goto("https://animated-gingersnap-8cf7f2.netlify.app/");

    //login action start 
    await userName.fill("admin");
    await password.fill("password123");
    await submitButton.click();

    //column text search
    
    //waiting for first column text 
    await columnTitles.first().waitFor();

    //console.log(await columnTitles.allTextContents()); //printing all column titles 

    const countOfColumnElements = await columnEle.count();
    //const countOfTickets = await ticketTitlesEle.count();


   //iterating over columns
    for(let i = 0; i < countOfColumnElements; i++) {

        const columnNameTitleWeAreOn = await columnEle.nth(i).locator("h2").textContent();
        if(columnNameTitleWeAreOn.includes(desiredColumnName)) 
            // if(await columnEle.nth(i).locator("h2").textContent() === desiredColumnName)
        {
            console.log(await columnEle.nth(i).locator("h2").textContent() + " is the column we are currently on"); 
            //asserting column name matches
            await expect(columnNameTitleWeAreOn.includes(desiredColumnName)).toBeTruthy();
            

        
            console.log(await columnEle.nth(i).locator("h3[class*='mb-2']").count() + " is the count of tickets inside the column we are on"); 
            const countOfTickets = await columnEle.nth(i).locator("h3[class*='mb-2']").count();
            //iterating over each ticket inside desired column
            for(let k = 0; k < countOfTickets; k++) {
                if(await columnEle.nth(i).locator("h3[class*='mb-2']").nth(k).textContent() === desiredTicketName) {
                    console.log(await columnEle.nth(i).locator("h3[class*='mb-2']").nth(k).textContent() + " is the title of the ticket we are currently on");
                    //asserting ticket name matches
                    await expect(columnEle.nth(i).locator("h3[class*='mb-2']").nth(k)).toHaveText(desiredTicketName)


                    const countOfTags = await columnEle.nth(i).locator(".bg-white").nth(k).locator(".px-2").count();
                    console.log(countOfTags + " is count of Tags in ticket");
                    //iterating over each tag element inside ticket
                    for(let j = 0; j < countOfTags; j++) {
                        if(countOfTags == 1) {
                            //asserting one tag
                            expect(await columnEle.nth(i).locator(".bg-white").nth(k).locator(".px-2").nth(j)).toHaveText(desiredTicketTagName1);
                            console.log(await columnEle.nth(i).locator(".bg-white").nth(k).locator(".px-2").nth(j).textContent() + " is tag name of ticket we are currently on");
                        } else if (countOfTags <= 2) {
                            //asserting two tags
                            expect(await columnEle.nth(i).locator(".bg-white").nth(k).locator(".px-2").nth(j)).toHaveText(desiredTicketTagName1);
                            console.log(await columnEle.nth(i).locator(".bg-white").nth(k).locator(".px-2").nth(j).textContent() + " is tag name #1 of ticket we are currently on");
                            j++;
                            expect(await columnEle.nth(i).locator(".bg-white").nth(k).locator(".px-2").nth(j)).toHaveText(desiredTicketTagName2); 
                            console.log(await columnEle.nth(i).locator(".bg-white").nth(k).locator(".px-2").nth(j).textContent() + " is tag name #2 of ticket we are currently on");
                        }
                    }
                } 
            } 


            
        }
    }

    

        

});
*/