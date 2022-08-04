import { When, Then } from "@wdio/cucumber-framework";
import { getWebElement } from "../../helpers/helpers";
import { MainPage } from "../pageobjects/MainPage";
import { ResultPage } from "../pageobjects/ResultPage";
import { gameOfThrones } from "../../constants/titles";
import { logger } from "../../conf/loggerConfig";

When(/^I enter "Игра престолов" in input field$/, async () => {
    logger.debug(`I enter ${gameOfThrones} in input field`);
    logger.error(`I enter ${gameOfThrones} in input field`);
    await (await getWebElement(MainPage.searchInput)).setValue(gameOfThrones);
});
When(/^I click on the link$/, async () => {
    logger.debug(`I click on the ${MainPage.searchButton} link`);
    logger.error(`I click on the ${MainPage.searchButton} link`);
    await (await getWebElement(MainPage.searchButton)).click();
});
Then(/^I should see the image "Game of Thrones"$/, async () => {
    logger.debug(` should see the ${ResultPage.result} image`);
    logger.error(` should see the ${ResultPage.result} image`);
    const checkResult = await getWebElement(ResultPage.result);
    await expect(await checkResult.isDisplayed());
});

