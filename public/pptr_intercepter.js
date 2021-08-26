// Create browser object/context
const browser = await puppeteer.launch();
// New page object in a default browser context
const page = await browser.newPage();
// Activating request interception
await page.setRequestInterception(true);
page.on('request', request => {
    if (request.resourceType() === 'image')
        request.abort();
    else
        request.continue();
});
// URL to navigate page to
await page.goto('https://news.google.com/news/');
// Take the screenshot of the page
await page.screenshot({ path: 'news.png', fullPage: true });

await browser.close();