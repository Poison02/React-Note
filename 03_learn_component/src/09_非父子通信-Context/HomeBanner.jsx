import ThemeContext from "./context/theme-context";

function HomeBanner() {
  return (
    /*在函数式组件中使用Context*/
    <ThemeContext.Consumer>
      {
        value => {
          return <h2>HomeBanner's Info: { value.color }</h2>
        }
      }
    </ThemeContext.Consumer>
  )
}

export default HomeBanner
