const puppeteer = require('puppeteer-extra');

puppeteer.launch({
    headless:true
}).then(async browser => {
    const page = await browser.newPage();

    await page.goto('https://www.covid19info.live/');

    let cases = [];

    //get confirmed Cases
    page.waitForSelector('.confirmed')
    .then(async function() {
        const confirmedCases = await page.$eval('.confirmed span.val', element => element.innerHTML);
        console.log('Confirmed Infected Cases::', confirmedCases);
    })

    //get death Cases
    page.waitForSelector('.deaths')
    .then(async function() {
        const deathCases = await page.$eval('.deaths span.val', element => element.innerHTML);
        console.log('Death Cases::', deathCases);
    })

    //get recovered Cases
    page.waitForSelector('.recovered')
    .then(async function() {
        const recoveredCases = await page.$eval('.recovered span.val', element => element.innerHTML);
        console.log('Recovered Cases::', recoveredCases);
    })
})
