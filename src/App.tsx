import React, { useEffect } from 'react'
import cn from 'classnames'
import { Routes, Route, Navigate } from 'react-router-dom'

import styles from './App.module.css'
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage'
import { Feed } from './pages/FeedPage/FeedPage';
import { ErrorPaage } from './pages/ErrorPaage/ErrorPaage';
import { FriendsParty } from './components/FriendsParty/FriendsParty';


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
                <Route path='feed' element={<Feed />} />
                <Route path='profile' element={<ProfilePage />}>
                  <Route path=':userId' element={<ProfilePage />} />
                </Route>
                <Route path='logout' element={<LoginPage />} />
                <Route path='*' element={<ErrorPaage />} />
              </Routes>
            </div>

            <div className={cn(styles.friends, 'container__side', 'container__side--right')}>
              <FriendsParty />
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
