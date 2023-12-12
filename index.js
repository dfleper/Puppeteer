import puppeteer from "puppeteer";

async function openWebPage() {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: "chrome\\win64-120.0.6099.71\\chrome-win64\\chrome.exe",
    slowMo: 200,
  });
  const page = await browser.newPage();
  await page.goto("https://www.example.com");
  await browser.close();
}

//openWebPage();

async function captureScreenshot() {
  const browser = await puppeteer.launch({
    headless: "new",
    executablePath: "chrome\\win64-120.0.6099.71\\chrome-win64\\chrome.exe",
  });
  const page = await browser.newPage();
  await page.goto("https://www.example.com");
  await page.screenshot({ path: "capturas\\example.png" });
  await browser.close();
}

//captureScreenshot();

async function navigateWebPage() {
  const browser = await puppeteer.launch({
    slowMo: 200,
    headless: false,
    executablePath: "chrome\\win64-120.0.6099.71\\chrome-win64\\chrome.exe",
  });
  const page = await browser.newPage();
  await page.goto("https://quotes.toscrape.com");
  await page.click('a[href="/login"]');
  await new Promise((resolve) => setTimeout(resolve, 3000));
  await browser.close();
}

//navigateWebPage();

async function getDataFromWebPage() {
  const browser = await puppeteer.launch({
    slowMo: 200,
    headless: false,
    executablePath: "chrome\\win64-120.0.6099.71\\chrome-win64\\chrome.exe",
  });
  const page = await browser.newPage();
  await page.goto("https://www.example.com");
  const data = await page.evaluate(() => {
    let title = document.querySelector("h1").innerText;
    let description = document.querySelector("p").innerText;
    return {
      title,
      description,
    };
  });
  console.log(data);
  await browser.close();
}

//getDataFromWebPage();

async function handleDynamicWebPage() {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 200,
    executablePath: "chrome\\win64-120.0.6099.71\\chrome-win64\\chrome.exe",
  });
  const page = await browser.newPage();
  await page.goto("https://quotes.toscrape.com");
  const data = await page.evaluate(() => {
    const quotes = document.querySelectorAll(".quote");
    const data = [...quotes].map((quote) => {
      const quoteText = quote.querySelector(".text").innerText;
      const author = quote.querySelector(".author").innerText;
      const tags = [...quote.querySelectorAll(".tag")].map(
        (tag) => tag.innerText
      );
      return {
        quoteText,
        author,
        tags,
      };
    });
    return data;
  });
  console.log(data);
  await browser.close();
}

handleDynamicWebPage();

// npx @puppeteer/browsers install chrome@stable 
// install cromium 