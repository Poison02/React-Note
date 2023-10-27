import {memo, useEffect} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import HomeWrapper from "@/views/home/style";
import HomeBanner from "@/views/home/c-cpns/home-banner";
import {fetchHomeDataAction} from "@/store/modules/home";
import SectionHeader from "@/components/section-header";
import RoomItem from "@/components/room-item";

const Home = memo(() => {

  /** 从redux中获取数据 */
  const { goodPriceInfo } = useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo
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
        <div className="good-price">
          <SectionHeader title={goodPriceInfo.title}/>
          <ul>
            {
              goodPriceInfo.list?.map(item => {
                return <RoomItem itemData={item} key={item.id}/>
              })
            }
          </ul>
        </div>
      </div>
      <button onClick={()=>{}}></button>
    </HomeWrapper>
  )
})

export default Home
