import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import logo from './logo.svg'

ReactDOM.render(
  <div>
    <header>
      <img src={logo} className="react-logo" alt="logo" />
      <h1 data-test-id="heading">End to End Testing in React</h1>
    </header>
    <App />
  </div>,
  document.getElementById('root')
)
