import React, {Component} from 'react'
import Home from "./Home";
import ThemeContext from "./context/theme-context";
import UserContext from "./context/user-context";
import Profile from "./Profile";

class App extends Component {
  constructor() {
    super();

    this.state = {
      info: {
        name: "Poison",
        age: 21
      }
    }
  }
  render() {
    const {info} = this.state
    return (
      <div>
        {/*通过这种方式将对象传过去*/}
        {/*<Home {...info}/>*/}

        {/*通过指定Context进行传值*/}
        <UserContext.Provider value={{nickname: "Hahaha", age: 18}}>
          <ThemeContext.Provider value={{color: "red", size: "30"}}>
            <Home {...info}/>
          </ThemeContext.Provider>
        </UserContext.Provider>

        <Profile/>
      </div>
    )
  }
}

export default App
