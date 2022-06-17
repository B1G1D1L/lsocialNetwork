import React from 'react'

import { WithProviders } from './providers'
import { Routing } from 'pages2'
import { Header } from 'widgets/header/ui'

import './index.css'

function App() {
  return (
    <div className='app'>
      <Header />
      <Routing />
    </div>
  )
}

export default WithProviders(App)

// <Routes>
//   <Route path="/" element={<Navigate replace to="feed" />} />
//   <Route path="users" element={<UsersPage />} />
//   <Route path="feed" element={<FeedPage />} />
//   <Route path="messages" element={<MessagePage />}>
//     <Route path=":userId" element={<Chat />} />
//   </Route>
//   <Route path="profile" element={<ProfilePage />}>
//     <Route path=":userId" element={<ProfilePage />} />
//   </Route>
//   <Route path="logout" element={<LoginPage />} />
//   <Route path="signup" element={<RegistrationPage />} />
//   <Route path="*" element={<ErrorPage />} />
// </Routes>
