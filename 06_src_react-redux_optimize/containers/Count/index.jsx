//引入action
import {
  incrementCount,
  decrementCount,
  incrementCountAsync
} from '../../redux/actions/count'

//引入connect用于连接UI组件与redux
import { connect } from 'react-redux'

import React, { Component } from 'react'
class Count extends Component {
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

//使用connect()()创建并暴露一个Count的容器组件
export default connect(
  state => ({ count: state }),
  {
    jia: incrementCount,
    jian: decrementCount,
    jiaAsync: incrementCountAsync,
  }
)(Count)

