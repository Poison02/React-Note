import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const FormPage: FC<IProps> = () => {
  return <div>FormPage</div>
}

export default memo(FormPage)
