import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

const FeedPage = React.lazy(() => import('./feed'))
const MessagePage = React.lazy(() => import('./message'))
const AuthPage = React.lazy(() => import('./auth'))

export const Routing = () => (
  <Routes>
    <Route path="/" element={<Navigate replace to="feed" />} />
    <Route path="feed" element={<FeedPage />} />
    <Route path="messages" element={<MessagePage />} />
    <Route path="auth" element={<AuthPage />} />
  </Routes>
)
