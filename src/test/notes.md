# Tom's example

```javascript
function verify(args, cb) {
  ;(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('http://localhost:8080')
    const output = await page
      .evaluate(() => {
        var element = document.querySelector('input')
        element.value = 'FooBar'
        var event = new Event('change', { bubbles: true })
        event.simulated = true
        element.dispatchEvent(event)

        document.querySelector('button#add-wish').click()

        return document.querySelector('ul').children.length
      })
      .catch(err => 0)
    if (output === 1) {
      cb(true)
    } else {
      cb(false)
    }

    await browser.close()
  })()
}
```