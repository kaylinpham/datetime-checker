const { Builder, Browser, By } = require("selenium-webdriver");
const fs = require("fs");
const forderOut = "./out";

if (!fs.existsSync(forderOut)) {
  fs.mkdirSync(forderOut);
}

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
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  await driver.get("https://kaylinpham.github.io/datetime-checker/");
  try {
    for (const index in inputs) {
      await driver.findElement(By.id("day")).sendKeys(inputs[index].day);
      await driver.findElement(By.id("month")).sendKeys(inputs[index].month);
      await driver.findElement(By.id("year")).sendKeys(inputs[index].year);
      await driver.findElement(By.id("check-button")).click();
      let img = await driver.takeScreenshot();
      const fileName = forderOut.concat(`/case_${index}.png`);
      fs.writeFileSync(fileName, img, "base64");
      await driver.findElement(By.id("clear-button")).click();
      await driver.sleep(100);
    }
  } finally {
    await driver.quit();
  }
})();
