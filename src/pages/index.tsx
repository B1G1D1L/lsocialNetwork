import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const FeedPage = React.lazy(() => import('./feed/ui'))
const MessagePage = React.lazy(() => import('./message/ui'))
const SignUp = React.lazy(() => import('./signup'))

export const Routing = () => (
  <Routes>
    <Route path="/" element={<Navigate replace to="feed" />} />
    <Route path="feed" element={<FeedPage />} />
    <Route path="messages" element={<MessagePage />} />
    <Route path="signup" element={<SignUp />} />
  </Routes>
)
