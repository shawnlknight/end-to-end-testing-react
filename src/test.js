const assert = require('assert')
const cabbie = require('cabbie-sync')

// Using chromedriver
// cabbie.startChromedriver()

// const driver = cabbie.default('chromedriver', {
//   base: 'http://localhost:3000',
//   debug: true
// })

// Using taxirank
const driver = cabbie.default('taxirank', {
  base: 'http://localhost:3000',
  debug: true
})

driver.activeWindow.navigateTo('/')

// Simple assertion test
// Note: Use data-test-id. Don't rely on position of element in DOM.
const heading = driver.activeWindow.getElement('[data-test-id="heading"]')
assert.equal(heading.getText(), 'End to End Testing in React')

// Testing input
const value = driver.activeWindow.getElement('[data-test-id="value"]')
assert.equal(value.getAttribute('value'), '')

value.sendKeys('Hello World')
assert.equal(value.getAttribute('value'), 'Hello World')

const reverse = driver.activeWindow.getElement('[data-test-id="reverse"]')
reverse.mouse.click()

assert.equal(value.getAttribute('value'), 'dlroW olleH')

driver.dispose()
