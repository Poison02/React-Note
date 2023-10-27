import {memo} from "react";
import SectionHeaderWrapper from "@/components/section-header/style";

const SectionHeader = memo((props) => {
  const {title, subtitle = "默认子标题的数据"} = props
  return (
    <SectionHeaderWrapper>
      <h2 className="title">{title}</h2>
      <div className="subtitle">{subtitle}</div>
    </SectionHeaderWrapper>
  )
})

export default SectionHeader
