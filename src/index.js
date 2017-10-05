import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render(
  <div>
    <header>
      <h1 data-test-id="heading">End to End Testing in React</h1>
    </header>
    <App />
  </div>,
  document.getElementById('root')
)
