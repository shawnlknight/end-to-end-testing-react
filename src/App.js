import React, { Component } from 'react'

// Reverse function
function reverser(value) {
  return value
    .split('')
    .reverse()
    .join('')
}

class App extends Component {
  state = { value: '' }

  _onChange = e => {
    this.setState({ value: e.target.value })
  }

  _onSubmit = e => {
    e.preventDefault()
    this.setState(s => ({
      value: reverser(s.value)
    }))
  }

  render() {
    return (
      <form onSubmit={this._onSubmit}>
        <input
          data-test-id="value"
          value={this.state.value}
          onChange={this._onChange}
        />
        <button data-test-id="reverse">Reverse</button>
      </form>
    )
  }
}

export default App
