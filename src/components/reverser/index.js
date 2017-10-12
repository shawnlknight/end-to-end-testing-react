import React, { Component } from 'react'
import reverse from '../../utils/reverse'

class Reverser extends Component {
  state = { value: '' }

  _onChange = e => {
    this.setState({ value: e.target.value })
  }

  _onSubmit = e => {
    e.preventDefault()
    const reversedVal = reverse(this.state.value)
    this.setState({
      value: reversedVal
    })
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

export default Reverser
