# End to End Testing React apps

Using [Cabbie](https://cabbiejs.org) for end-to-end testing of React apps.

Based off of  [https://github.com/ForbesLindesay/end-to-end-testing-react-applications](https://github.com/ForbesLindesay/end-to-end-testing-react-applications).

## Set up
```
 git clone git@github.com:shawnlknight/end-to-end-testing-react.git
 cd end-to-end-testing-react
 npm install
```

In one terminal window run:
```
npm start
```

In another terminal window run:
```
npm run test:e2e
```

## Types of tests
- Static Analysis (eslint, flow)
- JavaScript Tests (jest, tap, mocha)
- End to End (webdriver, cabbie)

## Why End to End Tests?
- Test what the real user would do
- Expose browser inconsistencies
- A relatively small number of tests can cover the integration of huge parts of your system
- The only way to know a part of your system is working

## Limitations of End to End Tests
- Very slow
- Unreliable
- Expensive
- It’s hard to know what caused failures (What unit tests are for)

### Note on identifying elements
- Give them a `data-test-id` attribute
- Do not rely on position within the document