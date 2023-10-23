import {memo, useEffect, useState} from "react";

const App = memo(() => {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState("Hello React")

  // 第二个参数传入一个数组，表示只受数组里面的影响才会再次执行Effect，若数组为空，则不受任何影响
  useEffect(() => {
    console.log("修改count")
  }, [count])

  useEffect(() => {
    console.log("监听redux中的数据")
    return () => {}
  }, [])

  useEffect(() => {
    console.log("监听eventBus的why事件")
    return () => {}
  }, [])

  useEffect(() => {
    console.log("发送网络请求, 从服务器获取数据")

    return () => {
      console.log("会在组件被卸载时, 才会执行一次")
    }
  }, [])

  return (
    <div>
      <button onClick={e => setCount(count + 1)}>+1({count})</button>
      <button onClick={e => setMessage("Hello World")}>更改文本({message})</button>
    </div>
  )
})

export default App
