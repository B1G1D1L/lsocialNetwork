import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { PrivateRoute } from 'shared/lib'

import { FeedPage } from './feed/ui'
import { MessagePage } from './message/ui'

const SignUpPage = React.lazy(() => import('./signup'))
const SignInPage = React.lazy(() => import('./signin'))
const ErrorPage = React.lazy(() => import('./error'))

export const Routing = () => {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<Navigate to="feed" />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path="signin" element={<SignInPage />} />
      <Route path="/*" element={<PrivateRoute />}>
        <Route path="feed" element={<FeedPage />} />
        <Route path="messages" element={<MessagePage />} />
      </Route>
    </Routes>
  )
}
