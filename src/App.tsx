import React from 'react'
import cn from 'classnames'
import { Routes, Route, Navigate } from 'react-router-dom'

import styles from './App.module.css'
import { Header, Navbar } from '@components/app';
import { LoginPage, UsersPage, ProfilePage, ErrorPage, FeedPage } from './pages';


function App() {

  return (
    <>
      <Header />
      <div>
        <div className="container">
          <div className={styles.body}>

            <div className='container__side'>
              <Navbar />
            </div>

            <div className={cn("container--small", 'container__center')}>
              <Routes>
                <Route path='/' element={<Navigate replace to='feed' />} />
                <Route path='users' element={<UsersPage />} />
                <Route path='feed' element={<FeedPage />} />
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
