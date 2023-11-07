import React, { Suspense, memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useRoutes } from 'react-router-dom'

import '@/assets/css/common.css'
import '@/assets/css/reset.css'
import AppHeader from './components/app-header'
import routes from './routes'
import AppFooter from './components/app-footer'

interface IProps {
  children?: ReactNode
}

const App: FC<IProps> = () => {
  return (
    <div className='App'>
      <AppHeader />
      {
        <Suspense fallback='loading'>
          <div className='main'>{useRoutes(routes)}</div>
        </Suspense>
      }
      <AppFooter />
    </div>
  )
}

export default memo(App)
