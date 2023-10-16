import React, {Component} from 'react'

class App extends Component {

  constructor() {
    super();

    this.state = {
      username: "poison"
    }
  }

  inputChange(event) {
    console.log("inputChange: ", event.target.value)
    this.setState({username: event.target.value})
  }

  render() {
    const {username} = this.state
    return (
      <div>
        {/*受控组件*/}
        <input type="checkbox" value={username} onChange={e => this.inputChange(e)}/>

        {/*非受控组件*/}
        <input type="text"/>
        <h2>username: {username}</h2>
      </div>
    )
  }
}

export default App
