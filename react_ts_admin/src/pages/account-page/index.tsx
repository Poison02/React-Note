import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const AccountPage: FC<IProps> = () => {
  return <div>AccountPage</div>
}

export default memo(AccountPage)
