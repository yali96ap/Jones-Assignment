const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('http://contractorsinsurancereview.com/ExampleForm/');
  await page.type('#name', 'Yali Pinhas')
  await page.type('#email', "yaliap96@gmail.com")
  await page.type('#phone', '+972-545669936')
  await page.type('#company', 'Jones')
  await page.select('#employees', '51-500')
  await page.screenshot({ path: 'sc.png' })
  await page.click("body > div > div.row > div.large-5.medium-5.columns > div > form > p:nth-child(8) > button")
  console.log("Reached to Thank you Page!");
  await page.screenshot({ path: 'sc2.png' })

  await browser.close();
})();