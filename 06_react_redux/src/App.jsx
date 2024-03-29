import React, {PureComponent} from 'react'
import store from "./store"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import "./style.css"
import About from "./pages/About";
import Category from "./pages/Category";

class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      counter: store.getState().counter
    }
  }
  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState()
      this.setState({counter: state.counter})
    })
  }

  render() {
    const {counter} = this.state
    return (
      <div>
        <h2>App Counter: {counter}</h2>

        <div className="pages">
          <Home/>
          <Profile/>
          <About/>
          <Category/>
        </div>
      </div>
    )
  }
}

export default App
