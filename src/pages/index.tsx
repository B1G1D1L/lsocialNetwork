import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useStore } from 'effector-react/compat'
import { PrivateRoute } from 'shared/lib'
import { $isAuth } from 'entities/user/model'

const FeedPage = React.lazy(() => import('./feed/ui'))
const MessagePage = React.lazy(() => import('./message/ui'))
const SignUpPage = React.lazy(() => import('./signup'))

export const Routing = () => {
  const isAuth = useStore($isAuth)
  console.log(isAuth)

  return (
    <Routes>
      <Route path="signup" element={<SignUpPage />} />
      <Route path="/" element={<Navigate to="feed" />} />
      <Route path="/*" element={<PrivateRoute />}>
        <Route path="feed" element={<FeedPage />} />
        <Route path="messages" element={<MessagePage />} />
      </Route>
    </Routes>
  )
}
