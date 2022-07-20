import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStore } from 'effector-react/compat'

import { $isAuth } from 'entities/user/model'

export const PrivateRoute = () => {
  const isAuth = useStore($isAuth)
  return <>{isAuth ? <Outlet /> : <Navigate to="/signup" />}</>
}
