import React, {Component} from 'react'
import ThemeContext from "./context/theme-context";
import UserContext from "./context/user-context";

class HomeInfo extends Component {
  render() {

    // 获取数据
    console.log(this.context)

    return (
      <div>
        <h2>HomeInfo: {this.context.color}</h2>
        <UserContext.Consumer>
          {
            value => {
              return <h2>HomeInfo's HomeBanner: {value.nickname}</h2>
            }
          }
        </UserContext.Consumer>
      </div>
    )
  }
}

// 得到Context
HomeInfo.contextType = ThemeContext

export default HomeInfo
