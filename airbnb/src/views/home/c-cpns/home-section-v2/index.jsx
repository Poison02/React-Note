import {memo, useCallback, useState} from "react";
import {SectionV2Wrapper} from "@/views/home/c-cpns/home-section-v2/style";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/section-tabs";
import SectionFooter from "@/components/section-footer";

const HomeSectionV2 = memo((props) => {
  const {infoData} = props

  // 数据转换
  const tabNames = infoData.dest_address?.map(item => item.name)
  const initialName = Object.keys(infoData.dest_list ?? {})[0]
  const [name, setName] = useState(initialName)
  const tabClickHandle = useCallback(function (index, name) {
    setName(name)
  }, [])

  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}/>
      <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.3333%"/>
      <SectionFooter name={name}/>
    </SectionV2Wrapper>
  )
})

export default HomeSectionV2
