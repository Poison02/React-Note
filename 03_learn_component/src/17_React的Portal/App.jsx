import React, {PureComponent} from 'react'
import { createPortal } from "react-dom"
import Model from "./Model";

class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>App H1</h1>
        {
          createPortal(<h2>App H2</h2>, document.querySelector("#why"))
        }

        {/*model组件*/}
        <Model>
          <h2>我是标题</h2>
          <p>我是内容哈哈哈</p>
        </Model>
      </div>
    )
  }
}

export default App
