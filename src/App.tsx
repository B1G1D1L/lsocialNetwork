import React from 'react'
import cn from 'classnames'
import { Routes, Route, Navigate } from 'react-router-dom'

import styles from './App.module.css'
import { Header, Navbar, FriendsParty } from './components/app';
import { LoginPage, ProfilePage, ErrorPaage, FeedPage } from './pages';


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
              <div className='container__center--wrapper'>
                <Routes>
                  <Route path='/' element={<Navigate replace to='feed' />} />
                  <Route path='feed' element={<FeedPage />} />
                  <Route path='profile' element={<ProfilePage />}>
                    <Route path=':userId' element={<ProfilePage />} />
                  </Route>
                  <Route path='logout' element={<LoginPage />} />
                  <Route path='*' element={<ErrorPaage />} />
                </Routes>
              </div>
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
