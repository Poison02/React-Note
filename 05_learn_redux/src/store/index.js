const {createStore} = require("redux")

// 定义初始化数据
const initialStore = {
  name: "aaa",
  counter: 100
}

// 定义reducer函数
// reducer函数接收两个参数
// 参数一：已经保存的state
// 参数二：dispatch过来的action
function reducer(state = initialStore, action) {

  // 有新数据的时候，那么返回一个新的state
  switch (action.type) {
    case "change_name":
      return {...state, name: action.name}
    case "add_counter":
      return {...state, counter: state.counter + action.counter}
    default:
      // 没有新数据更新时，就返回initialStore
      return state
  }
}

// 创建Store
const store = createStore(reducer)

module.exports = store
