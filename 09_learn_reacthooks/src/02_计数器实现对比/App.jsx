import React, {PureComponent} from 'react'
import CounterClass from "./CounterClass";
import CounterHook from "./CounterHook";

class App extends PureComponent {
  render() {
    return (
      <div>
        <h2>App Page</h2>
        <hr/>
        <CounterClass/>
        <hr/>
        <CounterHook/>
      </div>
    )
  }
}

export default App
