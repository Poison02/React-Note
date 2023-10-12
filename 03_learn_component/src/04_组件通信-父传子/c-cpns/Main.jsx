import React, {Component} from 'react'
import MainBanner from "./MainBanner"
import MainProductList from "./MainProductList"
import axios from "axios"

/*
* 案例一：不采用真实数据
* 在Main中生成数据，然后传到MainBanner和MainProductList中
* 父传子通过属性传递，子组件通过props接收数据
* 在constructor(props) 中接收数据，但是构造函数可以不写也会默认接收数据的
*
* 案例二：采用真实数据，使用axios请求这个地址：http://123.207.32.32:8000/home/multidata
*
* */
class Main extends Component {
  constructor() {
    super();

    this.state = {
      /*banners: ["热门歌曲", "推荐歌曲", "国语歌曲", "英语歌曲"],
      productList: ["路飞", "索隆", "山治", "乌索普"]*/
      banners: [],
      productList: []
    }
  }

  // 在 componentDidMount 这里进行网络请求
  componentDidMount() {
    axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
      const banners = res.data.data.banner.list
      const recommend = res.data.data.recommend.list
      this.setState({
        banners,
        productList: recommend
      })
    })
  }

  render() {
    const { banners, productList} = this.state
    return (
      <div className="main">
        <MainBanner banners={banners}/>
        <MainProductList productList={productList}/>
      </div>
    )
  }
}

export default Main
