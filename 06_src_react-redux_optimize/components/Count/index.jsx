import React, { Component } from 'react'

export default class Count extends Component {
  state = {
    val: 1
  }

  handleSelectChange = () => {
    return (e) => {
      const { value } = e.target
      this.setState({ val: parseInt(value) })
    }
  }

  increment = () => {
    let { val } = this.state
    this.props.jia(val)
  }

  decrement = () => {
    let { val } = this.state
    this.props.jian(val)
  }

  incrementOdd = () => {
    let { val } = this.state
    if (val % 2 === 0) {
      this.props.jia(val)
    }
  }

  incrementAsync = () => {
    let { val } = this.state
    // setTimeout(() => {
    this.props.jiaAsync(val, 500)
    // }, 500);
  }

  render () {
    return (
      <div>
        <h1>Count number: {this.props.count}</h1>
        <select style={{ width: '48px', height: '22px' }} onChange={this.handleSelectChange()} >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button style={{ margin: '0 6px' }} onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button style={{ margin: '0 6px' }} onClick={this.incrementOdd}>+ if odd</button>
        <button onClick={this.incrementAsync}>+ async</button>
      </div>
    )
  }
}
