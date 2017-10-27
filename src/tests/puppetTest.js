const puppeteer = require('puppeteer')

puppeteer.launch().then(async browser => {
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

  console.log('output', output)

  // Test it
  if (output === 'dlroW olleH') {
    console.log('\u2713 PASSED')
  } else {
    console.log('X FAILED')
  }

  await browser.close()
})
