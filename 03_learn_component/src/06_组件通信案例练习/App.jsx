import React, {Component} from 'react'
import TabControl from "./TabControl";
import {tab} from "@testing-library/user-event/dist/tab";

class App extends Component {
  constructor() {
    super();

    this.state = {
      title: ["流行", "新款", "精选"],
      tabIndex: 0
    }
  }

  itemClick(index) {
    this.setState({
      tabIndex: index
    })
  }

  render() {
    const { title, tabIndex } = this.state
    return (
      <div>
        <TabControl titles={title} itemClick={(index) => {this.itemClick(index)}}/>
        <h1>{title[tabIndex]}</h1>
      </div>
    )
  }
}

export default App
