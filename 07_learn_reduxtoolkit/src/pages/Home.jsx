import React, {PureComponent} from 'react'
import {connect} from "react-redux";
import {addNumber} from "../store/features/counter";
// import axios from "axios";
import {changeBanners, changeRecommends, fetchHomeMultidataAction} from "../store/features/home";

class Home extends PureComponent {
  componentDidMount() {
  //   axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
  //     const banners = res.data.data.banner.list
  //     const recommends = res.data.data.recommend.list
  //
  //     this.props.changeBanners(banners)
  //     this.props.changeRecommends(recommends)
  //   })
    this.props.fetchHomeMultiData()
  }

  addNumber(num) {
    this.props.addNumber(num)
  }
  render() {
    const {counter} = this.props
    return (
      <div>
        <h2>Home Counter: {counter}</h2>
        <button onClick={e => this.addNumber(6)}>+6</button>
        <button onClick={e => this.addNumber(8)}>+8</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter
})

const mapDispatchToProps = (dispatch) => ({
  addNumber(num) {
    dispatch(addNumber(num))
  },
  /*changeBanners(banners) {
    dispatch(changeBanners(banners))
  },
  changeRecommends(recommends) {
    dispatch(changeRecommends(recommends))
  }*/
  fetchHomeMultiData() {
    dispatch(fetchHomeMultidataAction())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
