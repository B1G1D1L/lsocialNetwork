import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import News from './components/News/News'
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import DialogContainer from './components/Dialog/DialogContainer';
import UsersAPIComponent from './components/Users/UsersContainer';
import Login from './components/Login/Login';


function App (props) {
  return (
    <BrowserRouter>
      <div className='content'>

        <HeaderContainer />
        <Navbar />

        <div className='content__wrapper'>
          {/* <Route path='/profile/:userId' render={ () => <ProfileContainer />}/> */}
          <Route path='/profile' render={ () => <ProfileContainer />}/>
          <Route path='/message' render={ () => <DialogContainer />}/>
          <Route path='/news'    render={ () => <News />}/>
          <Route path='/music'   render={ () => <Music />}/>
          <Route path='/setting' render={ () => <Setting />}/>
          <Route path='/users'   render={ () => <UsersAPIComponent />}/>
          <Route path='/login'   render={ () => <Login />}/>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
