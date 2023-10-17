import React, {Component} from 'react'
import withTheme from "../hoc/with_theme"

class Product extends Component {
  render() {
    const {color, size} = this.props
    return (
      <div>
        <h2>Product: {color}-{size}</h2>
      </div>
    )
  }
}

export default withTheme(Product)
