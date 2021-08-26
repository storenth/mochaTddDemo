const assert = require('assert');
const puppeteer = require('puppeteer');
const pti = require('puppeteer-to-istanbul');

let browser;
let page;

describe('express app', function() {
    // runs before all tests block
    before(async function(){
        this.timeout(5000);
        // Enable both JavaScript and CSS coverage
        browser = await puppeteer.launch();
        page = await browser.newPage();
        // Enable both JavaScript and CSS coverage
        await Promise.all([
            page.coverage.startJSCoverage(),
            page.coverage.startCSSCoverage()
        ]);
        await page.goto('http://localhost:8080', { waitUntil: 'networkidle2' });

    });
    after(async function() {
        // Disable both JavaScript and CSS coverage
        const jsCoverage = await page.coverage.stopJSCoverage();

        let totalBytes = 0;
        let usedBytes = 0;
        const coverage = [...jsCoverage];
        for (const entry of coverage) {
            totalBytes += entry.text.length;
            console.log(`js fileName covered: ${entry.url}`);
            for (const range of entry.ranges)
                usedBytes += range.end - range.start - 1;
        }
        // log original byte-based coverage
        console.log(`Bytes used: ${usedBytes / totalBytes * 100}%`);
        pti.write(jsCoverage);
        // Close browser instance
        await browser.close();
    });
    describe('/', function() {
        it('render with About Sharks title', async function(){
            // Setup
            const expectedTitle = 'About harks';
            // Exersice
            const actualTitle = await page.title();
            // Verify
            assert.equal(actualTitle, expectedTitle);
        }).timeout(50000);
    });
    
});