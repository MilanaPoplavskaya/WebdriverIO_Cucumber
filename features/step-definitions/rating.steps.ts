import { Given, When, Then } from "@wdio/cucumber-framework";
import { getWebElement } from "../pageobjects/helpers";
import { MainPage } from "../pageobjects/MainPage";
import { ResultPage } from "../pageobjects/ResultPage";

When(/^I enter "Бесстыжие" in input field$/, async () => {
    await (await getWebElement(MainPage.searchInput)).setValue("Бесстыжие");
});
When(/^I click on the link of this series$/, async () => {
    await (await getWebElement(MainPage.searchMovieLink)).click();
});
Then(/^I should see this series in "top 10"$/, async () => {
    const checkText = await (await getWebElement(ResultPage.text)).getText();
    await expect(checkText).toContain("место");
});