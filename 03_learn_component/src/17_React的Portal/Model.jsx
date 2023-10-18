import React, {PureComponent} from 'react'
import {createPortal} from "react-dom";

class App extends PureComponent {
  render() {
    return (
      <div>
        {
          createPortal(this.props.children, document.querySelector("#model"))
        }
      </div>
    )
  }
}

export default App
