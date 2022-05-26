const { Builder, Browser, By } = require("selenium-webdriver");

const inputs = [
  { day: 1, month: 1, year: 2000 },
  { day: 29, month: 2, year: 2001 },
  { day: 31, month: 5, year: 1999 },
  { day: 0, month: 5, year: 1999 },
  { day: -1, month: 13, year: 1000 },
  { day: 6, month: 5, year: 2000 },
  { day: 35, month: 8, year: 3001 },
  { day: 99, month: -5, year: 300 },
  { day: 15, month: 8, year: 2005 },
  { day: 28, month: 2, year: 2000 },
];

(async function run() {
  let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  await driver.get("https://kaylinpham.github.io/datetime-checker/");
  try {
    for (const item of inputs) {
      await driver.findElement(By.id("day")).sendKeys(item.day);
      await driver.findElement(By.id("month")).sendKeys(item.month);
      await driver.findElement(By.id("year")).sendKeys(item.year);
      await driver.findElement(By.id("check-button")).click();
      await driver.sleep(3000);
      await driver.findElement(By.id("clear-button")).click();
    }
  } finally {
    await driver.quit();
  }
})();
