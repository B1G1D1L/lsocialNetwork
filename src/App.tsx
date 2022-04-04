import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { LoginPage } from './pages/LoginPage/LoginPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage'


function App() {

  return (
    <Routes>
      <Route path='/' element={ <ProfilePage /> }>
        <Route path=':userId' element={ <ProfilePage /> } />
      </Route>
      <Route path='login' element={ <LoginPage /> } />
    </Routes> 

  );
}

export default App;
