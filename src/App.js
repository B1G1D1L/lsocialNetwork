import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import News from './components/News/News'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import DialogContainer from './components/Dialog/DialogContainer';
import UsersContainer from './components/Users/UsersContainer';


function App (props) {
  return (
    <BrowserRouter>
      <div className='content'>

        <Header />
        <Navbar />

        <div className='content__wrapper'>
          <Route path='/profile' render={ () => <Profile />}/>
          <Route path='/message' render={ () => <DialogContainer />}/>
          <Route path='/news'    render={ () => <News />}/>
          <Route path='/music'   render={ () => <Music />}/>
          <Route path='/setting' render={ () => <Setting />}/>
          <Route path='/users'   render={ () => <UsersContainer />}/>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
