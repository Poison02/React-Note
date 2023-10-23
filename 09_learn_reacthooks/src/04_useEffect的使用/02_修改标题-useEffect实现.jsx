import {memo, useEffect, useState} from "react";

const App = memo(() => {
  const [count, setCount] = useState(100)

  useEffect(() => {
    // 传入的回调函数会在组件渲染之后自动执行
    document.title = count
  })

  return (
    <div>
      <h2>App Counter: {count}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
    </div>
  )
})

export default App
