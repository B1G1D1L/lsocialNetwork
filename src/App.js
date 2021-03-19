import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dialog from './components/Dialog/Dialog';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';


function App() {
  return (
    <BrowserRouter>
      <div className='content'>
        <Header />
        <Navbar />
        <div className='content__wrapper'>
          <Route path='/profile' component={Profile} />
          <Route path='/message' component={Dialog} />
          {/* <Profile /> */}
          {/* <Dialog /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
