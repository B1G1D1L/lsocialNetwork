import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
// import { useStore } from 'effector-react/compat'
import { PrivateRoute } from 'shared/lib'
// import { $isAuth } from 'entities/user/model'

import { FeedPage } from './feed/ui'
import { MessagePage } from './message/ui'

const SignUpPage = React.lazy(() => import('./signup'))
const ErrorPage = React.lazy(() => import('./error'))

export const Routing = () => {
  // const isAuth = useStore($isAuth)

  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path="/" element={<Navigate to="feed" />} />
      <Route path="/*" element={<PrivateRoute />}>
        <Route path="feed" element={<FeedPage />} />
        <Route path="messages" element={<MessagePage />} />
      </Route>
    </Routes>
  )
}
