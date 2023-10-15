import React, {PureComponent} from 'react'
import Home from "./Home";
import Profile from "./Profile";

class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      message: "Hello World"
    }
  }
  render() {
    const {message} = this.state
    return (
      <div>
        App: {message}
        <Home message={message}/>
        <Profile message={message}/>
      </div>
    )
  }
}

export default App
