import {memo} from "react";
import SectionHeaderWrapper from "@/components/section-header/style";

const SectionHeader = memo((props) => {
  const {title, subtitle = ""} = props
  return (
    <SectionHeaderWrapper>
      <h2 className="title">{title}</h2>
      <div className="subtitle">{subtitle}</div>
    </SectionHeaderWrapper>
  )
})

export default SectionHeader
