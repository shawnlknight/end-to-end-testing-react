import React from 'react'
import ReactDOM from 'react-dom'
import Reverser from './'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Reverser />, div)
})
