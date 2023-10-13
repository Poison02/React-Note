import React, {Component} from 'react'

class NavBarTwo extends Component {
  render() {
    // 通过props接收
    const {leftSlot, centerSlot, rightSlot} = this.props
    return (
      <div className="nav-bar">
        <div className="left">{leftSlot}</div>
        <div className="center">{centerSlot}</div>
        <div className="right">{rightSlot}</div>
      </div>
    )
  }
}

export default NavBarTwo
