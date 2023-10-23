import {memo, useEffect, useState} from "react";

const App = memo(() => {
  const [count, setCount] = useState(0)

  // 负责告知react，在执行完当前组件渲染之后要执行的副作用代码
  useEffect(() => {
    console.log("1. 修改title")
  })

  // 一个函数式组件中，可以存在多个useEffect
  useEffect(() => {
    console.log("2. 监听redux中的数据")
    return () => {
      // 取消redux中数据的监听
      console.log("2.1 取消监听redux中的数据")
    }
  })

  useEffect(() => {
    console.log("3. 监听eventBus的why事件")
    return () => {
      console.log("3.1 取消监听eventBus的why事件")
    }
  })
  return (
    <div>
      <button onClick={e => setCount(count + 1)}>+1 ({count})</button>
    </div>
  )
})

export default App
