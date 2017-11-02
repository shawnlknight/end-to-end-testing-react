const puppeteer = require('puppeteer')
const assert = require('assert')

const config = {
  headless: false,
  slowMo: 80
}

describe('Reverse Function', function() {
  it('reverses string', async () => {
    const browser = await puppeteer.launch() //headless by default
    const page = await browser.newPage()
    await page.goto('http://localhost:3000/')
    const button = await page.$('[data-test-id="reverse"]')
    const input = await page.$('[data-test-id="value"]')

    // Initial page load
    await page.screenshot({ path: 'testscreenshot1.png' })

    // Typing into text input
    await input.type('Hello World')
    await page.screenshot({ path: 'testscreenshot2.png' })

    // Button click
    await button.click()
    await page.screenshot({ path: 'testscreenshot3.png' })

    const output = await page.evaluate(() => {
      return document.querySelector('[data-test-id="value"]').value
    })

    console.log('output:', output)

    // Test it
    assert.equal(output, 'dlroW olleH')
    await browser.close()
  })
})
