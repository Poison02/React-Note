import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeDiscountData,
  getHomeHotRecommendData, getHomeLongforData, getHomePlusData
} from "@/services";

// 发起网络请求
export const fetchHomeDataAction = createAsyncThunk("fetchData", async (payload, {dispatch}) => {
  // “优惠价格”数据
  getHomeGoodPriceData().then(res => {
    // 在这里直接dispatch对应的action
    dispatch(changeGoodPriceInfoAction(res))
  })
  // “好评”数据
  getHomeHighScoreData().then(res => {
    dispatch(changeHighScoreInfoAction(res))
  })
  // ”折扣“数据
  getHomeDiscountData().then(res => {
    dispatch(changeDiscountInfoAction(res))
  })
  // ”热门推荐“数据
  getHomeHotRecommendData().then(res => {
    dispatch(changeHotRecommendInfoAction(res))
  })
  // “向往”数据
  getHomeLongforData().then(res => {
    dispatch(changeLongforInfoAction(res))
  })
  // “plus”数据
  getHomePlusData().then(res => {
    dispatch(changePlusInfoAction(res))
  })
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    hotRecommendInfo: {},
    longforInfo: {},
    plusInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, {payload}) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, {payload}) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, {payload}) {
      state.discountInfo = payload
    },
    changeHotRecommendInfoAction(state, {payload}) {
      state.hotRecommendInfo = payload
    },
    changeLongforInfoAction(state, { payload }) {
      state.longforInfo = payload
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload
    }
  }
})

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeHotRecommendInfoAction,
  changeLongforInfoAction,
  changePlusInfoAction
} = homeSlice.actions
export default homeSlice.reducer
