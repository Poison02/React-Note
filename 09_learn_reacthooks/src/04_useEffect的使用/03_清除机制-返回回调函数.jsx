import {memo, useEffect, useState} from "react";

const App = memo(() => {
  const [count, setCount] = useState(0)

  // 每次组件渲染之后要执行的Effect
  useEffect(() => {
    console.log("监听redux数据变化")

    // 返回值就是取消监听
    return () => {
      console.log("取消监听redux数据变化")
    }
  })

  return (
    <div>
      <button onClick={e => setCount(count + 1)}>+1({count})</button>
    </div>
  )
})

export default App
