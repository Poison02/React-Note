import {memo} from "react";
import {ItemWrapper} from "@/components/longfor-item/style";

const LongforItem = memo((props) => {
  const {itemData} = props

  return (
    <ItemWrapper>
      <div className="inner">
        <div className="item-info">
          <img src={itemData.picture_url} alt="xxx" className="cover"/>
          <div className="bg-cover"></div>
          <div className="info">
            <div className="city">
              {itemData.city}
            </div>
            <div className="price">
              均价{itemData.price}
            </div>
          </div>
        </div>
      </div>
    </ItemWrapper>
  )
})

export default LongforItem
