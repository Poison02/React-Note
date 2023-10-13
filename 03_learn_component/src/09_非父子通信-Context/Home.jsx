import React, {Component} from 'react'
import HomeInfo from "./HomeInfo";
import HomeBanner from "./HomeBanner";

class Home extends Component {
  render() {
    const {name, age} = this.props
    return (
      <div>
        <h2>姓名：{name}</h2>
        <h2>年龄：{age}</h2>
        <HomeInfo/>
        <HomeBanner/>
      </div>
    )
  }
}

export default Home
