import React, {PureComponent} from 'react';

class HelloWorld extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello World!"
    }
  }

  render() {
    const {message} = this.state
    return (
      <div>
        <h2>内容：{message}</h2>
      </div>
    );
  }
}

function HelloWorld2(props) {
  let message = "Hello World"
  return (
    <div>
      <h2>内容2：{message}</h2>
    </div>
  )
}

class App extends PureComponent {
  render() {
    return (
      <div>
        <HelloWorld/>
        <hr/>
        <HelloWorld2/>
      </div>
    );
  }
}

export default App;
