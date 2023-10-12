import React, {Component} from 'react'

class SubCounter extends Component {
  subCount(count) {
    // 在子组件中调用父组件的addClick方法，将我点击传过来的count传到父组件中
    this.props.subClick(count)
  }
  render() {
    return (
      <div>
        <button onClick={e => this.subCount(-1)}>-1</button>
        <button onClick={e => this.subCount(-5)}>-5</button>
        <button onClick={e => this.subCount(-10)}>-10</button>
      </div>
    )
  }
}

export default SubCounter
