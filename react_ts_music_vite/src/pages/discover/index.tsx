import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const DisCover: FC<IProps> = () => {
  return <div>DisCover</div>
}

export default memo(DisCover)
