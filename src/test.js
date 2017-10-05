const assert = require('assert')
const cabbie = require('cabbie-sync')

// Using taxirank
const driver = cabbie.default('taxirank', {
  base: 'http://localhost:3000',
  debug: true
})

// Using chromedriver
// cabbie.startChromedriver()

// const driver = cabbie.default('chromedriver', {
//   base: 'http://localhost:3000',
//   debug: true
// })

driver.activeWindow.navigateTo('/')

// Simple assertion test
const heading = driver.activeWindow.getElement('[data-test-id="heading"]')
assert.equal(heading.getText(), 'End to End Testing in React')

// Testing reverser input
const value = driver.activeWindow.getElement('[data-test-id="value"]')
assert.equal(value.getAttribute('value'), '')

value.sendKeys('Hello World')
assert.equal(value.getAttribute('value'), 'Hello World')

const reverse = driver.activeWindow.getElement('[data-test-id="reverse"]')
reverse.mouse.click()

assert.equal(value.getAttribute('value'), 'dlroW olleH')

// Comment out when using chromedriver to see result
driver.dispose()
