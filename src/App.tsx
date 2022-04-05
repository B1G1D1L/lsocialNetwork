import React from 'react'
import cn from 'classnames'

import styles from './App.module.css'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage'


function App() {

  return (
    <>
      <Header />

      <div>
        <div className="container">
          <div className={styles.body}>
            <div className={cn(styles.navbar, 'container--side')}>
              <Navbar />
            </div>


            <div className="container--small">
              <Routes>
                <Route path='/' element={<ProfilePage />}>
                  <Route path=':userId' element={<ProfilePage />} />
                </Route>
                <Route path='login' element={<LoginPage />} />
              </Routes>
            </div>

            <div className='container--side'>hello</div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
