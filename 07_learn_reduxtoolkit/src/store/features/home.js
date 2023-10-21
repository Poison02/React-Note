import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios";

export const fetchHomeMultidataAction = createAsyncThunk(
  "fetch/homemultidata", async () => {
    const res = await axios.get("http://123.207.32.32:8000/home/multidata")
    return res.data
  })

const homeSlice = createSlice({
  name: "home",
  initialState: {
    banners: [],
    recommends: []
  },
  // 监听同步的reducer
  reducers: {
    changeBanners(state, {payload}) {
      state.banners = payload
    },
    changeRecommends(state, {payload}) {
      state.recommends = payload
    }
  },
  // 监听异步的reducer
  extraReducers: {
    // pending 状态表示发出请求但是还未收到数据返回
    [fetchHomeMultidataAction.pending](state, action) {
      console.log("pending")
    },
    // fulfilled 状态表示成功请求响应
    [fetchHomeMultidataAction.fulfilled](state, {payload}) {
      state.banners = payload.data.banner.list
      state.recommends = payload.data.recommend.list
    },
    // rejected 状态表示失败或异常
    [fetchHomeMultidataAction.rejected](state, action) {
      console.log("rejected")
    }
  }
})

export const {changeBanners, changeRecommends} = homeSlice.actions

export default homeSlice.reducer
