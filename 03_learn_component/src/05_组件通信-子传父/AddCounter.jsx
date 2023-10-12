import React, {Component} from 'react'

class AddCounter extends Component {

  addCount(count) {
    // 在子组件中调用父组件的addClick方法，将我点击传过来的count传到父组件中
    this.props.addClick(count)
  }
  render() {
    return (
      <div>
        <button onClick={e => this.addCount(1)}>+1</button>
        <button onClick={e => this.addCount(5)}>+5</button>
        <button onClick={e => this.addCount(10)}>+10</button>
      </div>
    )
  }
}

export default AddCounter
