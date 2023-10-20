const store = require("./store")

// 会自动订阅，返回的时取消订阅
const unSubscribe = store.subscribe(() => {
  console.log("订阅的数据：", store.getState())
})

const changeNameAction = (name) => ({
  type: "change_name",
  name
})

// 修改store中的数据：必须使用action
store.dispatch(changeNameAction("kobe"))

// unSubscribe()

const addCounterAction = (counter) => ({
  type: "add_counter",
  counter
})
// 修改counter
store.dispatch(addCounterAction(100))
