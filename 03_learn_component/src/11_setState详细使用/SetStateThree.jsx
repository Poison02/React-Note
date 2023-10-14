import React, {Component} from 'react'

class SetStateThree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello World",
      count: 0
    }
  }

  changeText() {

    // 1.基本使用
    /*this.setState({
      message: "Hello React"
    })*/

    // 2.setState可以传入一个回调函数
    // 好处一: 可以在回调函数中编写新的state的逻辑
    // 好处二: 当前的回调函数会将之前的state和props传递进来
    /*this.setState(() => {
      console.log(this.state.message, this.props)
      return {
        message: "Hello React"
      }
    })*/

    // 3.setState在React的事件处理中是一个异步调用
    // 如果希望在数据更新之后(数据合并), 获取到对应的结果执行一些逻辑代码
    // 那么可以在setState中传入第二个参数: callback
    this.setState({message: "Hello React"}, () => {
      console.log(this.state.message)
    })
  }

  render() {
    const {message, count} = this.state
    return (
      <div>
        <h2>message: {message}</h2>
        <button onClick={e => this.changeText()}>点击1</button>
        <h2>count: {count}</h2>
      </div>
    )
  }
}

export default SetStateThree
