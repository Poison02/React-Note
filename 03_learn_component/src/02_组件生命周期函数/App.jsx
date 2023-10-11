import React from "react"
import HelloWorld from "./HelloWorld";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isShowHW: true
    }
  }

  changeShow() {
    this.setState({
      isShowHW: !this.state.isShowHW
    })
  }
  render() {
    const {isShowHW} = this.state
    return (
      <div>
        哈哈哈哈哈
        <button onClick={e => this.changeShow()}>点击送1000W</button>
        {isShowHW && <HelloWorld/>}
      </div>
    );
  }
}

export default App
