const puppeteer = require('puppeteer');

const run = async () => {
    const browser = await puppeteer.launch({
        headless: true
    });

    const page = await browser.newPage();
    // Catch all failed requests like 4xx..5xx status codes
    page.on('requestfailed', request => {
        console.log(`url: ${request.url()}, errText: ${request.failure().errorText}, method: ${request.method()}`)
    });
    // Catch console log errors
    page.on("pageerror", err => {
        console.log(`Page error: ${err.toString()}`);
    });
    // Catch all console messages
    page.on('console', msg => {
        console.log('Logger:', msg.type());
        console.log('Logger:', msg.text());
        console.log('Logger:', msg.location());

    });

    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto('https://nitzani1.wixsite.com/marketing-automation/3rd-page', { waitUntil: 'domcontentloaded' });
    await page.waitFor(10000); // To be sure all exceptions logged and handled
    await browser.close();

};

run();