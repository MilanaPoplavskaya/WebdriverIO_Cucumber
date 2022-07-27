import { Given, When, Then } from "@wdio/cucumber-framework";
import { getWebElement } from "../pageobjects/helpers";
import { MainPage } from "../pageobjects/MainPage";
import { ResultPage } from "../pageobjects/ResultPage";

When(/^I click on the button "Попробовать плюс"$/, async () => {
    await (await getWebElement(MainPage.searchLink)).click();
});
Then(/^I should see the button "Оформить подписку" is enabled$/, async () => {
    const checkButton = await getWebElement(ResultPage.subscribe);
    await expect(await checkButton.isEnabled());
});