import React, {Component} from 'react'
import TabControl from "./TabControl";

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

  getTabItem(item) {
    if (item === "流行") {
      return <span>{item}</span>
    } else if (item === '新款') {
      return <button>{item}</button>
    } else {
      return <i>{item}</i>
    }
  }

  render() {
    const { title, tabIndex } = this.state
    return (
      <div>
        <TabControl
          titles={title}
          itemClick={(index) => {this.itemClick(index)}}
          tabItem={item => this.getTabItem(item)}
        />
        <h1>{title[tabIndex]}</h1>
      </div>
    )
  }
}

export default App
