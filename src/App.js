import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import './App.css';
import News from './components/News/News'
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import Music from './components/Music/Music';
// import Setting from './components/Setting/Setting';
import DialogContainer from './components/Dialog/DialogContainer';
// import UsersAPIComponent from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import Preloader from './components/common/Preloader/Preloader';

import { initializeApp } from './Redax/reducers/app-reducer';
const UsersAPIComponent = React.lazy(() => import('./components/Users/UsersContainer'));
const Setting = React.lazy(() => import('./components/Setting/Setting'));



class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if(!this.props.initialized) {
      return <Preloader />
    }

    return (
      <BrowserRouter>
        <div className='content'>

          <HeaderContainer />
          <Navbar />

          <div className='content__wrapper'>
            <Switch>
              <Route exact path='/' render={ () => <ProfileContainer />} />
              <Route path='/profile/:userId?' render={ () => <ProfileContainer />}/>
              <Route path='/message' render={ () => <DialogContainer />}/>
              <Route path='/news'    render={ () => <News />}/>
              <Route path='/music'   render={ () => <Music />}/>
              <Route path='/login'   render={ () => <Login />}/>
              <Suspense fallback={<div><Preloader/></div>}>
                <section>
                  <Route path='/users' render={ () => <UsersAPIComponent />}/>
                  <Route path='/setting' render={ () => <Setting />}/>
                </section>
              </Suspense >
            </Switch>
          </div>

        </div>
      </BrowserRouter>
    );
  } 
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default compose(
  connect(mapStateToProps, {initializeApp}),
)(App)


