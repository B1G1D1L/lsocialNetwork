import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useStore } from 'effector-react/compat'
import { PrivateRoute } from 'shared/lib'
import { $isAuth } from 'entities/user/model'

const FeedPage = React.lazy(() => import('./feed/ui'))
const MessagePage = React.lazy(() => import('./message/ui'))
const SignUp = React.lazy(() => import('./signup'))

export const Routing = () => {
  const isAuth = useStore($isAuth)
  console.log(isAuth)

  return (
    <Routes>
      <Route
        path="/"
        element={<PrivateRoute component={<Navigate replace to="feed" />} />}
      />
      <Route path="feed" element={<PrivateRoute component={<FeedPage />} />} />
      <Route
        path="messages"
        element={<PrivateRoute component={<MessagePage />} />}
      />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  )
}
