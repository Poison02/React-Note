import React from 'react'
import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

const App = lazy(() => import('@/App'))
const Dashboard = lazy(() => import('@/pages/dashboard'))
const AccountPage = lazy(() => import('@/pages/account-page'))
const DetailPage = lazy(() => import('@/pages/detail-page'))
const FormPage = lazy(() => import('@/pages/form-page'))
const TablePage = lazy(() => import('@/pages/table-page'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/account',
    element: <AccountPage />,
  },
  {
    path: '/detail',
    element: <DetailPage />,
  },
  {
    path: '/form',
    element: <FormPage />,
  },
  {
    path: '/table',
    element: <TablePage />,
  },
]

export default routes
