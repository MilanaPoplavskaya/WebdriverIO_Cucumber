import { Given } from "@wdio/cucumber-framework";

Given(/^I'm on the main page$/, async () => {
    await browser.url("https://www.kinopoisk.ru/");
});