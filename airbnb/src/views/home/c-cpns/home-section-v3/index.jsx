import {memo} from "react";
import {SectionV3Wrapper} from "@/views/home/c-cpns/home-section-v3/style";
import SectionHeader from "@/components/section-header";
import ScrollView from "@/base-ui/scroll-view";
import RoomItem from "@/components/room-item";
import SectionFooter from "@/components/section-footer";

const HomeSectionV3 = memo((props) => {
  const { infoData } = props

  return (
    <SectionV3Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <div className='room-list'>
        <ScrollView>
          {
            infoData.list.map(item => {
              return <RoomItem itemData={item} itemWidth="20%" key={item.id}/>
            })
          }
        </ScrollView>
      </div>
      <SectionFooter name="plus"/>
    </SectionV3Wrapper>
  )
})

export default HomeSectionV3
