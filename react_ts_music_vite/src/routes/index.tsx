import { lazy } from 'react'
import { Navigate, RouteObject } from 'react-router-dom'

const Discover = lazy(() => import('@/pages/discover'))
const Download = lazy(() => import('@/pages/download'))
const Focus = lazy(() => import('@/pages/focus'))
const Mine = lazy(() => import('@/pages/mine'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to='/discover' />,
  },
  {
    path: '/discover',
    element: <Discover />,
  },
  {
    path: '/mine',
    element: <Mine />,
  },
  {
    path: '/focus',
    element: <Focus />,
  },
  {
    path: 'download',
    element: <Download />,
  },
]

export default routes
