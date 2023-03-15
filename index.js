const puppeteer = require("puppeteer");
const fs = require("fs").promises;

(async () => {
  //initiate the browser
  const browser = await puppeteer.launch();

  //create a new in headless chrome
  const page = await browser.newPage();

  //go to target website
  await page.goto(
    "https://app.contezostaging.net/contests/2c3f2b3f-323f-0842-3f3f-016c19693f2e",
    {
      //wait for content to load
      waitUntil: "networkidle0",
    }
  );

  //get full page html
  const html = await page.content();

  //store html content in the reactstorefront file
  await fs.writeFile("reactstorefront.html", html);

  //close headless chrome
  await browser.close();
})();
