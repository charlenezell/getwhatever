const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.setViewport({
        width:750,
        height:1144,
        deviceScaleFactor:2,
        isMobile:true,
        hasTouch:true
    })
    await page.goto('http://m.100bt.com/zn/');
    await page.screenshot({
        path: 'example.png',
        // quality:100,
        fullPage:true
    });
    await browser.close();
})();