import React, {Component} from 'react'
import eventBus from "./utils/event-bus";

class HomeBanner extends Component {

  prevClick() {
    console.log("上一个")
    eventBus.emit("prevClick", "Poison", 18, 1.88)
  }

  nextClick() {
    console.log("下一个")
    eventBus.emit("nextClick", {nickname: "poison", age: 18})
  }

  render() {
    return (
      <div>
        <h2>HomeBanner</h2>
        <button onClick={e => this.prevClick()}>上一个</button>
        <button onClick={e => this.nextClick()}>下一个</button>
      </div>
    )
  }
}

export default HomeBanner
