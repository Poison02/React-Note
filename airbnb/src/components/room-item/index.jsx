import {memo} from "react";

const RoomItem = memo((props) => {
  const {itemData} = props
  return (
    <div>{itemData.name}</div>
  )
})

export default RoomItem
