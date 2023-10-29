import {memo, useEffect} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import HomeWrapper from "@/views/home/style";
import HomeBanner from "@/views/home/c-cpns/home-banner";
import {fetchHomeDataAction} from "@/store/modules/home";
import HomeSectionV1 from "@/views/home/c-cpns/home-section-v1";
import HomeSectionV2 from "@/views/home/c-cpns/home-section-v2";
import {isEmptyO} from "@/utils";
import HomeLongfor from "@/views/home/c-cpns/home-longfor";
import HomeSectionV3 from "@/views/home/c-cpns/home-section-v3";

const Home = memo(() => {

  /** 从redux中获取数据 */
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    hotRecommendInfo,
    longforInfo,
    plusInfo
  } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    hotRecommendInfo: state.home.hotRecommendInfo,
    longforInfo: state.home.longforInfo,
    plusInfo: state.home.plusInfo
  }), shallowEqual)

  /** 派发异步的事件: 发送网络请求 */
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className="content">
        {/*只有discountInfo有值时才要渲染，延迟加载*/}
        {isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo}/>}
        {isEmptyO(longforInfo) && <HomeLongfor infoData={longforInfo}/>}
        {isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo}/>}
        {isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo}/>}
        {isEmptyO(hotRecommendInfo) && <HomeSectionV2 infoData={hotRecommendInfo}/>}
        { isEmptyO(plusInfo) && <HomeSectionV3 infoData={plusInfo}/> }
      </div>
    </HomeWrapper>
  )
})

export default Home
