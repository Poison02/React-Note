import React, {Component} from 'react'
import "./style.css"

class TabControl extends Component {

  constructor() {
    super();

    this.state = {
      currentIndex: 0
    }
  }

  itemClick(index) {
    // 改变当前页面点击的导航栏的样式
    this.setState({
      currentIndex: index
    })
    // 将当前index传到父组件去
    this.props.itemClick(index)
  }

  render() {
    const { titles, tabItem } = this.props
    const { currentIndex } = this.state

    return (
      <div className="tab-control">
        {
          titles.map((item, index) => {
            return (
              <div
                className={`item + ${index === currentIndex ? 'active' : ''}`}
                key={item}
                onClick={e => {this.itemClick(index)}}
              >
                {/*<span className="text">{item}</span>*/}
                {tabItem(item)}
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default TabControl
