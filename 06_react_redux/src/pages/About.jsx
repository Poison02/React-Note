import React, {PureComponent} from 'react'
import {connect} from "react-redux";
import {addNumberAction, subNumberAction} from "../store/actionCreator";

class About extends PureComponent {
  calcNumber(num, isAdd) {
    if (isAdd) {
      console.log("加", num)
      this.props.addNumber(num)
    } else {
      console.log("减", num)
      this.props.subNumber(num)
    }
  }
  render() {
    const {counter} = this.props
    return (
      <div>
        <h2>About Counter: {counter}</h2>

        <div>
          <button onClick={e => this.calcNumber(6, true)}>+6</button>
          <button onClick={e => this.calcNumber(88, true)}>+88</button>
          <button onClick={e => this.calcNumber(6, false)}>-6</button>
          <button onClick={e => this.calcNumber(88, false)}>-88</button>
        </div>
      </div>
    )
  }
}

// function mapStateToProps(state) {
//   return {
//     counter: state.counter
//   }
// }

const mapStateToProps = (state) => ({
  counter: state.counter
})

const mapDispatchToProps = (dispatch) => ({
  addNumber(num) {
    dispatch(addNumberAction(num))
  },
  subNumber(num) {
    dispatch(subNumberAction(num))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(About)
