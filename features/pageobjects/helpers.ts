export const getWebElement = async (elementLocator: string): Promise<WebdriverIO.Element> => {
    const webElement = await $(elementLocator);
    await webElement.waitForExist({ timeout: 500000, reverse: false });
    return webElement;
};