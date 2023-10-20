import React, {PureComponent} from 'react'
import store from "../store"
import { addNumberAction} from "../store/actionCreator";

class Home extends PureComponent {
  constructor() {
    super();

    this.state = {
      counter: store.getState().counter
    }
  }

  // 在生命周期中的加载阶段订阅counter的变化
  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState()
      // 得到改变后的 state ，然后更新页面中的 state.counter
      this.setState({counter: state.counter})
    })
  }

  addNumber(num) {
    store.dispatch(addNumberAction(num))
  }

  render() {
    const {counter} = this.state
    return (
      <div>
        <h2>Home Counter: {counter}</h2>
        <div>
          <button onClick={e => this.addNumber(1)}>+1</button>
          <button onClick={e => this.addNumber(5)}>+5</button>
          <button onClick={e => this.addNumber(10)}>+10</button>
        </div>
      </div>
    )
  }
}

export default Home
