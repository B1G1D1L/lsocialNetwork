import React from 'react'
import cn from 'classnames'
import { Routes, Route, Navigate } from 'react-router-dom'

import styles from './App.module.css'
import { Header, Navbar } from '@components/app';
import { LoginPage, UsersPage, ProfilePage, ErrorPage, FeedPage, MessagePage } from './pages';
import { Chat } from './components';


function App() {

  return (
    <>
      <Header />
      <div>
        <div className="container">
          <div className={styles.body}>

            <div className={cn('container__side', 'container__side--left')}>
              <Navbar />
            </div>

            <div className={cn("container--small", 'container__center')}>
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
                <Route path='*' element={<ErrorPage />} />
              </Routes>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
