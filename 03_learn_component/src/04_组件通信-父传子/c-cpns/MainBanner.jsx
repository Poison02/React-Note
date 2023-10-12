import React, {Component} from 'react'
import propTypes from 'prop-types'

// 在MainBanner中显式调用构造函数接收数据
class MainBanner extends Component {
  constructor(props) {
    super(props);
    // 这里打印一下看看props
    console.log(props)
  }

  render() {
    const { banners } = this.props
    return (
      <div className="mainBanner">
        <h2>封装一个轮播图</h2>
        <ul>
          {
            banners.map(item => {
              return (
                <li key={item.acm}>{item.title}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

// 使用 prop-types 里面的proTypes进行类型校验
MainBanner.propTypes = {
  banners: propTypes.array.isRequired
}

export default MainBanner
