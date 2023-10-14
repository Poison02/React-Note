import React, {Component} from 'react'
import Home from "./Home";
import HomeBanner from "./HomeBanner";
import eventBus from "./utils/event-bus";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      age: 0,
      height: 0
    }
  }

  // 在装载的时候监听事件总线
  componentDidMount() {
    // 最后那个this是相当于将当前类实例传过去，等于 this.prevClick.bind(this)
    eventBus.on("prevClick", this.prevClick, this)

    eventBus.on("nextClick", this.nextClick, this)
  }

  prevClick(name, age, height) {
    console.log(name, age, height)
    this.setState({name, age, height})
  }
  nextClick(info) {
    console.log(info)
  }

  // 在组件被销毁的时候取消订阅事件总线
  componentWillUnmount() {
    eventBus.off("prevClick", this.prevClick)

    eventBus.off("nextClick", this.nextClick)
  }

  render() {
    const {name, age, height} = this.state
    return (
      <div>
        <h2>AppContent: {name}-{age}-{height}</h2>
        <Home/>
        <HomeBanner/>
      </div>
    )
  }
}

export default App
