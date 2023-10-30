import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './modules/counter'
import {
  useSelector,
  useDispatch,
  shallowEqual,
  TypedUseSelectorHook
} from 'react-redux'

const store = configureStore({
  reducer: {
    counter: counterSlice
  }
})

type GetStateFnType = typeof store.getState
type IRootState = ReturnType<GetStateFnType>
type DispatchType = typeof store.dispatch

// useAppSelector 的 Hook
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
// useDispatch 的 Hook
export const useAppDispatch: () => DispatchType = useDispatch
// shallowEqual 的 Hook
export const shallowEqualApp = shallowEqual

export default store
