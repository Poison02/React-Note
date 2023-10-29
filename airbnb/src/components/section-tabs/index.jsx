import {memo, useState} from "react";
import {TabsWrapper} from "@/components/section-tabs/style";
import classNames from "classnames";
import ScrollView from "@/base-ui/scroll-view";

const SectionTabs = memo((props) => {
  const {tabNames = [], tabClick} = props
  const [currentIndex, setCurrentIndex] = useState(0)

  function itemClickHandler(index, name) {
    setCurrentIndex(index)
    tabClick(index, name)
  }
  return (
    <TabsWrapper>
      <ScrollView>
        {
          tabNames.map((item, index) => {
            return (
              <div
                className={classNames("item", {active: index === currentIndex})}
                key={item}
                onClick={e => itemClickHandler(index, item)}
              >
                {item}
              </div>
            )
          })
        }
      </ScrollView>
    </TabsWrapper>
  )
})

export default SectionTabs
