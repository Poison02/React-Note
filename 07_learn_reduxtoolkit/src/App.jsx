import React, {PureComponent} from 'react'
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import {connect} from "react-redux"
import "./style.css"

class App extends PureComponent {
  render() {
    const {counter} = this.props
    return (
      <div>
        <h2>App Counter: {counter}</h2>
        <div className="pages">
          <Home/>
          <Profile/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter
})

export default connect(mapStateToProps)(App)
