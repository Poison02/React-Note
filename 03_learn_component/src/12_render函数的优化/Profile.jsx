import {memo} from "react";

// 使用memo就可以是 只有当前需要用到的props修改了才会重新渲染
const Profile = memo(function (props) {
  const {message} = props
  return (
    <div>profile: {message}</div>
  )
})

export default Profile
