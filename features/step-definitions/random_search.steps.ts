import { When, Then } from "@wdio/cucumber-framework";
import { getWebElement } from "../../helpers/helpers";
import { MainPage } from "../pageobjects/MainPage";
import { ResultPage } from "../pageobjects/ResultPage";
import { logger } from "../../conf/loggerConfig";

When(/^I click on the icon "magnifier"$/, async () => {
    logger.debug(`I click on the icon ${MainPage.findTheSearchButton}`);
    logger.error(`I click on the icon ${MainPage.findTheSearchButton}`);
    await (await getWebElement(MainPage.findTheSearchButton)).click();
});
Then(/^I should see the button "Случайный поиск" is existing$/, async () => {
    logger.debug(`I should see the button "${ResultPage.result} is existing`);
    logger.error(`I should see the button "${ResultPage.result} is existing`);
    const checkRandomSearch = await getWebElement(ResultPage.randomSearch);
    await expect(await checkRandomSearch.isExisting());
});