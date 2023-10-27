import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {getHomeGoodPriceData} from "@/services";

// 发起网络请求
export const fetchHomeDataAction = createAsyncThunk("fetchData", async () => {
  return await getHomeGoodPriceData()
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, {payload}) {
      state.goodPriceInfo = payload
    }
  },
  extraReducers: {
    [fetchHomeDataAction.fulfilled](state, {payload}) {
      console.log(payload)
      state.goodPriceInfo = payload
    }
  }
})

export const {changeGoodPriceInfoAction} = homeSlice.actions
export default homeSlice.reducer
