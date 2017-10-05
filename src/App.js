import React, { Component } from 'react'

class App extends Component {
  state = { value: '' }

  _onChange = e => {
    this.setState({ value: e.target.value })
  }

  _onSubmit = e => {
    e.preventDefault()
    this.setState(s => ({
      value: s.value
        .split('')
        .reverse()
        .join('')
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
