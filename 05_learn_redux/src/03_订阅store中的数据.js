const store = require("./store")

// 会自动订阅，返回的时取消订阅
const unSubscribe = store.subscribe(() => {
  console.log("订阅的数据：", store.getState())
})

// 修改store中的数据：必须使用action
store.dispatch({type: "change_name", name: "kobe"})

unSubscribe()

// 修改counter
store.dispatch({type: "add_counter", counter: 100})
