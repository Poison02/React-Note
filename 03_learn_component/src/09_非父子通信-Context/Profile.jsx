import React, {Component} from 'react'
import ThemeContext from "./context/theme-context";

class Profile extends Component {
  render() {
    console.log(this.context)
    return (
      <div>
        Profile: {this.context.color}
      </div>
    )
  }
}

Profile.contextType = ThemeContext

export default Profile
