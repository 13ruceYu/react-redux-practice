import React, { Component } from 'react'
import { nanoid } from 'nanoid'

export default class Person extends Component {
  handleAddUser = () => {
    const name = this.input1.value;
    const age = this.input2.value;
    const personObj = { id: nanoid, name, age }
    console.log(personObj);
  }
  render () {
    return (
      <div>
        <h2>我是 Person 组件</h2>
        <div className="operator">
          <input ref={el => this.input1 = el} placeholder="name" type="text" />
          <input ref={el => this.input2 = el} placeholder="age" type="text" />
          <button onClick={this.handleAddUser}>add</button>
        </div>
        <div className="list-user">
          <ul>
            <li>user-age</li>
          </ul>
        </div>
      </div>
    )
  }
}
