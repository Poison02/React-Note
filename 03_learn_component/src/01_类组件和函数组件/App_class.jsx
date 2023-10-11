import React from "react"
// import { Component } from "react"
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "App_class Component"
    }
  }
  render() {
    const { message } = this.state
    return (
      <div>
        <h2>{message}</h2>
        <h2>哈哈哈哈</h2>
      </div>
    )
  }
}

export default App;
