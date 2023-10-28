import {memo} from "react";
import RoomItem from "@/components/room-item";
import RoomWrapper from "@/components/section-rooms/style";

const SectionRooms = memo((props) => {
  const {roomList = []} = props
  return (
    <RoomWrapper>
      {
        roomList.slice(0, 8).map(item => {
          return <RoomItem itemData={item} key={item.id}/>
        })
      }
    </RoomWrapper>
  )
})

export default SectionRooms