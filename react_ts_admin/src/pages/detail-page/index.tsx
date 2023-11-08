import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const DetailPage: FC<IProps> = () => {
  return <div>DetailPage</div>
}

export default memo(DetailPage)
