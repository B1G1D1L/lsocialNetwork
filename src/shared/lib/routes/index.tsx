import { useStore } from 'effector-react/compat'
import { $isAuth } from 'entities/user/model'
import React from 'react'
import { Navigate, Route } from 'react-router-dom'

interface IRouteProps {
  caseSensitive?: boolean
  children?: React.ReactNode
  element?: React.ReactNode | null
  index?: boolean
  path?: string
}

export const PrivateRoute = ({ component }: any) => {
  const isAuth = useStore($isAuth)

  return <>{isAuth ? component : <Navigate to="/signup" />}</>
}
