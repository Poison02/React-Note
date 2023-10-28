import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {getHomeGoodPriceData, getHomeHighScoreData, getHomeDiscountData} from "@/services";

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
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {}
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
    }
  }
})

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction
} = homeSlice.actions
export default homeSlice.reducer
