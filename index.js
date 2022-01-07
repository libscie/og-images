const express = require("express"); // Adding Express
const app = express(); // Initializing Express
const puppeteer = require("puppeteer"); // Adding Puppeteer

app.get("/api/researchequals", async function (req, res) {
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1200,
    height: 628,
    deviceScaleFactor: 1,
  });

  await page.goto("https://researchequals.com");
  // const content = await page.$("#hero")
  const content = await page.$("body");
  // await page.click("#rcc-confirm-button")

  const imageBuffer = await content.screenshot({ omitBackground: true });

  await page.close();
  await browser.close();

  res.statusCode = 200;

  res.setHeader("Content-Type", "image/png");
  res.end(imageBuffer);
});

// Making Express listen on port 7000
app.listen(process.env.PORT || 7000);
