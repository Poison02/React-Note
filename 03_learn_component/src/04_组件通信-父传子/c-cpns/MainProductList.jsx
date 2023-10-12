import React, {Component} from 'react'

// 在MainProductList中不调用构造函数，但是同样能够拿到数据
class MainProductList extends Component {
  render() {
    const { productList } = this.props
    return (
      <div className="mainProductList">
        <h2>商品列表</h2>
        <ul>
          {
            productList.map(item => {
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

export default MainProductList
