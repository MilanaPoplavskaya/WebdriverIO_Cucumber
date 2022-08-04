import { When, Then } from "@wdio/cucumber-framework";
import { getWebElement } from "../../helpers/helpers";
import { MainPage } from "../pageobjects/MainPage";
import { ResultPage } from "../pageobjects/ResultPage";
import { logger } from "../../conf/loggerConfig";

When(/^I click on the link "Билеты в кино"$/, async () => {
    logger.debug(`I click on the link ${MainPage.searchBuyingTickets}`);
    logger.error(`I click on the link ${MainPage.searchBuyingTickets}`);
    await (await getWebElement(MainPage.searchBuyingTickets)).click();
});
Then(/^I should see the button "Моя афиша" is clickable$/, async () => {
    logger.debug(`I should see the button ${ResultPage.resultOfButton} is clickable`);
    logger.error(`I click on the link ${ResultPage.resultOfButton}`);
    const checkClickable = await getWebElement(ResultPage.resultOfButton);
    await expect(await checkClickable.isClickable());
});