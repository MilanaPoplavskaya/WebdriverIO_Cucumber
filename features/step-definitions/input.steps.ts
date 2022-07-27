import { When, Then } from "@wdio/cucumber-framework";
import { getWebElement } from "../../helpers/helpers";
import { MainPage } from "../pageobjects/MainPage";
import { ResultPage } from "../pageobjects/ResultPage";

When(/^I enter "Игра престолов" in input field$/, async () => {
    await (await getWebElement(MainPage.searchInput)).setValue("Игра престолов");
});
When(/^I click on the link$/, async () => {
    await (await getWebElement(MainPage.searchButton)).click();
});
Then(/^I should see the image "Game of Thrones"$/, async () => {
    const checkResult = await getWebElement(ResultPage.result);
    await expect(await checkResult.isDisplayed());
});

