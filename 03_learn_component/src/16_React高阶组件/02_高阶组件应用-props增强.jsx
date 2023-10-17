import React, {Component} from 'react'
import enhancedUserInfo from "./hoc/enhanced_props"
import About from "./pages/About";

const Home = enhancedUserInfo(function (props) {
  return <h1>Home: {props.name}-{props.level}-{props.banners}</h1>
})
const Profile = enhancedUserInfo(function(props) {
  return <h1>Profile: {props.name}-{props.level}</h1>
})

const HelloFriend = enhancedUserInfo(function(props) {
  return <h1>HelloFriend: {props.name}-{props.level}</h1>
})
class App extends Component {
  render() {
    return (
      <div>
        <Home banners={["hello1", "hello2"]}/>
        <Profile/>
        <HelloFriend/>

        <About/>
      </div>
    )
  }
}

export default App
