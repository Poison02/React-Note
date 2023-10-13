import React, {Component} from 'react'
import NavBar from "./nav-bar";
import NavBarTwo from "./nav-bar-two";

class App extends Component {
  render() {
    return (
      <div>
        {/* 通过 children元素传入，传多个元素的时候就是数组 */}
        <NavBar>
          <button>按钮</button>
          <h2>我是标题</h2>
          <i>斜体文字</i>
        </NavBar>

        {/* 通过props传入 */}
        <NavBarTwo
          leftSlot={<button>按钮</button>}
          centerSlot={<h2>我是标题</h2>}
          rightSlot={<i>斜体文字</i>}
        />
      </div>
    )
  }
}

export default App
