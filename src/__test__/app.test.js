import puppeteer from 'puppeteer';
import luhn from '../js/luhn';
import check from '../js/check';

test.each([
  ['2221007553306766', true],
  ['6759254195214005', true],
  ['513541976494562', false],
])(('test function luhn'), (input, expected) => {
  expect(luhn(input)).toEqual(expected);
});

test.each([
  ['6759254195214005', 'maestro'],
  ['4485910311593574', 'visa'],
  ['5135419764945621', 'mc'],
])(('test function check'), (input, expected) => {
  expect(check(input)).toEqual(expected);
});

jest.setTimeout(30000);
describe('form test', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });
  test('Form test valid', async () => {
    await page.goto(baseUrl);
    const container = await page.$('.container');
    const input = await container.$('.input');
    await input.type('4485910311593574');
    const button = await container.$('.button');
    button.click();
    await page.waitForSelector('.valid');
  });
});
