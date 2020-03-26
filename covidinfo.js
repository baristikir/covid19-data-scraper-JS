const puppeteer = require('puppeteer-extra');

puppeteer.launch({
    headless:true
}).then(async browser => {
    const page = await browser.newPage();

    await page.goto('https://www.covid19info.live/');

    page.waitForSelector('.confirmed')
    .then(async function() {
        const confirmedCases = await page.$eval('.confirmed span.val', element => element.innerHTML);
        console.log('Confirmed Total Cases::', confirmedCases);
    })

    page.waitForSelector('.deaths')
    .then(async function() {
        const deathCases = await page.$eval('.deaths span.val', element => element.innerHTML);
        console.log('Confirmed Death Cases::', deathCases);
    })

    page.waitForSelector('.recovered')
    .then(async function() {
        const recoveredCases = await page.$eval('.recovered span.val', element => element.innerHTML);
        console.log('Confirmed Recovered Cases::', recoveredCases);
    })
})
