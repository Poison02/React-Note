import {memo} from "react";
import {LongforWrapper} from "@/views/home/c-cpns/home-longfor/style";
import SectionHeader from "@/components/section-header";
import ScrollView from "@/base-ui/scroll-view";
import LongforItem from "@/components/longfor-item";

const HomeLongfor = memo((props) => {
  const {infoData} = props

  return (
    <LongforWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <div className="longfor-list">
        <ScrollView>
          {
            infoData.list.map(item => {
              return <LongforItem itemData={item} key={item.city}/>
            })
          }
        </ScrollView>
      </div>
    </LongforWrapper>
  )
})

export default HomeLongfor
