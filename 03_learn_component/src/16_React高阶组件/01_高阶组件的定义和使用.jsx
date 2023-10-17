import React, {Component, PureComponent} from 'react'

// 定义一个高阶组件
function hoc(Cpn) {
  // 1. 定义类组件
  class NewCpn extends PureComponent {
    render() {
      return <Cpn/>
    }
  }

  return NewCpn

  // 定义函数组件
  // function NewCpn2(props) {

  // }
  // return NewCpn2
}

class HelloWorld extends PureComponent {
  render() {
    return <h1>Hello World</h1>
  }
}

const HelloWorldHoc = hoc(HelloWorld)
class App extends Component {
  render() {
    return (
      <div>
        <HelloWorldHoc/>
      </div>
    )
  }
}

export default App
