import { Given, When, Then } from "@wdio/cucumber-framework";
import { getWebElement } from "../pageobjects/helpers";
import { MainPage } from "../pageobjects/MainPage";
import { ResultPage } from "../pageobjects/ResultPage";

When(/^I click on the icon "magnifier"$/, async () => {
    await (await getWebElement(MainPage.findTheSearchButton)).click();
});
Then(/^I should see the button "Случайный поиск" is existing$/, async () => {
    const checkRandomSearch = await getWebElement(ResultPage.randomSearch);
    await expect(await checkRandomSearch.isExisting());
});