import React, {Component} from 'react'
import ThemeContext from "./context/theme_context"
import Product from "./pages/Product"

class App extends Component {
  render() {
    return (
      <div>
        <ThemeContext.Provider value={{color: "red", size: 30}}>
          <Product/>
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default App
