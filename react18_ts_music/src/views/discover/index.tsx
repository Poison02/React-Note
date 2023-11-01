import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet, Link } from 'react-router-dom'
import NavBar from './c-cpns/nav-bar'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = (props) => {
  return (
    <div>
      <NavBar />
      <Suspense fallback="Loadind...">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)
