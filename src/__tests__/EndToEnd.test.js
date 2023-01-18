import puppeteer from "puppeteer";

describe('show/hide an event details', () => {
    let browser, page;
    
    beforeAll(async () => {
        jest.setTimeout(30000);
        browser = await puppeteer.launch({
            // headless: false,
            // slowMo: 250, //slow down by 250 ms
            // ignoreDefaultArgs: ['--disable-extensions'] //ignodes default setting that causes timeout errors
        });
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event');
    });

    afterAll(() => {
        browser.close();
    })
    
    test('An event element is collapsed by default', async () => {
        const eventDetails = await page.$('.event .event__Details');
        expect(eventDetails).toBeNull();
    });

    test('User can expand an event to see its details', async() =>{
        await page.click('.event .expand');
        const eventDetails = await page.$('.event .event_Details');
        expect(eventDetails).toBeDefined();
    });

    test('User can collapse an event to hide its details', async() =>{
        await page.click('.event .expand');
        const eventDetails = await page.$('.event .event__Details');
        expect(eventDetails).toBeNull();
    });

});

describe('Filter events by city', () => {
    let browser, page;

    beforeAll(async () => {
        jest.setTimeout(30000);
        browser = await puppeteer.launch({
            // headless: false,
            // slowMo: 250, //slow down by 250 ms
            // ignoreDefaultArgs: ['--disable-extensions'] //ignodes default setting that causes timeout errors
        });
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event');
        await page.waitForSelector('.city');
    });

    afterAll(() => {
        browser.close();
    });

    test('A list of events is shown by default', async() =>{
        const count = await page.$$eval('.event',(events) => events.length);
        expect(count).toBe(2);
    });

    test('When user starts typing a list of suggestions should appear', async() =>{
        await page.type('.city', 'Berlin', {delay: 100});
        const suggestions = await page.$$eval('.suggestions li', (element) => element.length);
        expect(suggestions).toBe(2);
    });

    test('When user click on one city events from that city should appear', async() =>{
        await page.click('.suggestions li');
        const count = await page.$$eval('.event',(events) => events.length);
        let element = await page.$('.event .location');
        let value = await element.evaluate(el => el.textContent);
        expect(count).toBe(1);
        expect(value).toContain('Berlin');
        
    });

    test('If user clicks on show all events from every city available shouls appear', async() =>{
        await page.type('.city', 'Berlin', {delay: 100});
        await page.click('.suggestions li');
        const count = await page.$$eval('.event',(events) => events.length);
        expect(count).toBe(2);
    });

});