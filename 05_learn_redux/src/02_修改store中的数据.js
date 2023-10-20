const store = require("./store")

// 修改store中的数据：必须使用action
const nameAction = {type: "change_name", name: "kobe"}
store.dispatch(nameAction)

console.log(store.getState())

// 修改counter
const counterAction = {type: "add_counter", counter: 100}
store.dispatch(counterAction)

console.log(store.getState())
