import {memo} from "react";
import {LeftWrapper} from "@/components/app-header/c-cpns/header-left/style";
import IconLogo from "@/assets/svg/icon_logo";

const HeaderLeft = memo(() => {
  return (
    <LeftWrapper>
      <div className="logo">
        <IconLogo/>
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft
