import { Given, When, Then } from "@wdio/cucumber-framework";
import { getWebElement } from "../pageobjects/helpers";
import { MainPage } from "../pageobjects/MainPage";
import { ResultPage } from "../pageobjects/ResultPage";

When(/^I click on the link "Билеты в кино"$/, async () => {
    await (await getWebElement(MainPage.searchBuyingTickets)).click();
});
Then(/^I should see the button "Моя афиша" is clickable$/, async () => {
    const checkClickable = await getWebElement(ResultPage.resultOfButton);
    await expect(await checkClickable.isClickable());
});