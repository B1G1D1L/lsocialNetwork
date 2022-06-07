import React from 'react'
import cn from 'classnames'
import { Routes, Route, Navigate } from 'react-router-dom'

import styles from './App.module.css'
import { Header, Navbar } from '@components/app';
import { LoginPage, UsersPage, ProfilePage, ErrorPage, FeedPage, MessagePage, RegistrationPage } from './pages';
import { Chat } from './components';


function App() {

  return (
    <>
      <Header />
      <div className='container'>

        <Navbar />

        <Routes>
          <Route path='/' element={<Navigate replace to='feed' />} />
          <Route path='users' element={<UsersPage />} />
          <Route path='feed' element={<FeedPage />} />
          <Route path='messages' element={<MessagePage />} >
            <Route path=':userId' element={<Chat />} />
          </Route>
          <Route path='profile' element={<ProfilePage />}>
            <Route path=':userId' element={<ProfilePage />} />
          </Route>
          <Route path='logout' element={<LoginPage />} />
          <Route path='registration' element={<RegistrationPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>

      </div>
    </>
  );
}

export default App;
