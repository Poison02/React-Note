import React from "react"

class HelloWorld extends React.Component {
  // 1. 生命周期第一步，constructor
  constructor() {
    console.log("HelloWorld Constructor!")
    super();
    this.state = {
      message: "Hello World!"
    }
  }

  changeText() {
    this.setState({
      message: "Hello React!"
    })
  }

  // 2. 生命周期第二步，render
  render() {
    console.log("HelloWorld render!")
    const {message} = this.state
    return (
      <div>
        <h2>{message}</h2>
        <button onClick={e => this.changeText()}>点击我发财</button>
      </div>
    );
  }

  // 3. 第三步，装载
  componentDidMount() {
    console.log("HelloWorld componentDidMount!")
  }

  // 4. 第四步，更新
  componentDidUpdate() {
    console.log("HelloWorld componentDidUpdate!")
  }

  // 5. 第五步，卸载
  componentWillUnmount() {
    console.log("HelloWorld componentWillUnmount!")
  }
}

export default HelloWorld
