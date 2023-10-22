import {memo, useState} from "react";

function CounterHook(props) {
  const [counter, setCounter] = useState(0)
  const [name] = useState("why")
  console.log(name)

  return (
    <div>
      <h2>CounterHook Counter: {counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
      <button onClick={e => setCounter(counter - 1)}>+1</button>
    </div>
  )
}

export default memo(CounterHook)
