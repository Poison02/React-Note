import React, { Suspense, memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useRoutes } from 'react-router-dom'
import { ConfigProvider, Spin } from 'antd'

import '@/assets/css/reset.css'
import '@/assets/css/common.css'
import routes from './routes/index.tsx'
import useGlobalStore from './store/global.ts'
import Dashboard from './pages/dashboard/index.tsx'

interface IProps {
  children?: ReactNode
}

const App: FC<IProps> = () => {
  const { primaryColor } = useGlobalStore()
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: primaryColor,
          borderRadius: 16,
        },
      }}
    >
      <Suspense fallback={<Spin size='large' className='global_spin' />}>
        <div className='main'>{useRoutes(routes)}</div>
      </Suspense>
    </ConfigProvider>
  )
}

export default memo(App)
