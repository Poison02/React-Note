import React, {Component} from 'react'
import AddCounter from "./AddCounter";
import SubCounter from "./SubCounter";

/*
* 子组件传递给父组件，原理就是通过父组件使用props传一个函数给子组件，
* 子组件对值进行修改之后，调用父组件传过来的函数，父组件就能得到函数值然后进行修改
* */
class App extends Component {

  constructor() {
    super();

    this.state = {
      count: 100
    }
  }
  render() {
    const { count } = this.state
    return (
      <div>
        <h2>当前数：{count}</h2>
        {/* 在这里还是用props与子组件进行通信，但是这次是传 Function */}
        <AddCounter addClick={(count) => this.changeClick(count)}/>
        <SubCounter subClick={(count) => this.changeClick(count)}/>
      </div>
    )
  }

  changeClick(count) {
    this.setState({
      count: this.state.count + count
    })
  }
}

export default App
