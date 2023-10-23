import React, {PureComponent} from 'react';

class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      counter: 100
    }
  }

  componentDidMount() {
    document.title = this.state.counter
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    document.title = this.state.counter
  }

  render() {
    const {counter} = this.state
    return (
      <div>
        <h2>Counter: {counter}</h2>
        <button onClick={e => this.setState({counter: counter+1})}>+1</button>
      </div>
    );
  }
}
export default App;
