const { Builder, Browser, By } = require("selenium-webdriver");

let inputs = [{ day: 1, month: 1, year: 2000 }];

(async function run() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();

  inputs.forEach(async (element) => {
    try {
      await driver.get("https://kaylinpham.github.io/datetime-checker/");

      await driver.findElement(By.id("day")).sendKeys(element.day);
      await driver.findElement(By.id("month")).sendKeys(element.month);
      await driver.findElement(By.id("year")).sendKeys(element.year);
      await driver.findElement(By.id("check-button")).click();

      await driver.sleep(3000);
    } finally {
      await driver.quit();
    }
  });
})();
