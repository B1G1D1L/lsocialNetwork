import React from 'react';
import './App.css';
import Dialog from './components/Dialog/Dialog';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';


function App() {
  return (
    <div className='content'>
      <Header />  
      <Navbar />
      <div className='content__wrapper'>
        {/* <Profile /> */}
        <Dialog />
      </div>
    </div>
  );
}

export default App;
