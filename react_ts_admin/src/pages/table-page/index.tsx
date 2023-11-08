import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const TablePage: FC<IProps> = () => {
  return <div>TablePage</div>
}

export default memo(TablePage)
