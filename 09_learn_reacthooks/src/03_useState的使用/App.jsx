import {memo, useState} from "react";

const App = memo(() => {
  const [message, setMessage] = useState("Hello World")
  // const [count, setCount] = useState(100)
  // const [banners, SetBanners] = useState([])

  function changeMessage() {
    setMessage("Hello ReactHook!")
  }

  return (
    <div>
      <h2>App: {message}</h2>
      <button onClick={changeMessage}>修改文本</button>
    </div>
  )
})

export default App
