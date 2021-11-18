import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import './App.css';
import News from './components/News/News'
import { HeaderContainer } from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import { ProfileContainer } from './components/Profile/ProfileContainer';
import Music from './components/Music/Music';
import DialogContainer from './components/Dialog/DialogContainer';
import Login from './components/Login/Login';
import Preloader from './components/common/Preloader/Preloader';

import { initializeApp } from './Redax/reducers/app-reducer';
import { AppStateType } from './Redax/redax-store';

const UsersAPIComponent = React.lazy(() => import('./components/Users/UsersContainer'));
const Setting = React.lazy(() => import('./components/Setting/Setting'));


class App extends React.Component<PropsType> {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if(!this.props.initialized) {
      return <Preloader />
    }

    return (
      
      <BrowserRouter >
        <div className='content'>
          <HeaderContainer />
          <Navbar />
          <main className='content__wrapper'>
            <Switch>
              <Route exact path='/'  render={ () => <ProfileContainer />} />
              <Route path='/profile/:userId?' render={ () => <ProfileContainer />}/>
              <Route path='/message' render={ () => <DialogContainer />}/>
              <Route path='/news'    render={ () => <News />}/>
              <Route path='/music'   render={ () => <Music />}/>
              <Route path='/login'   render={ () => <Login />}/>
              <Suspense fallback={<div><Preloader/></div>}>
                <section>
                  <Route path='/users'   render={ () => <UsersAPIComponent />}/>
                  <Route path='/setting' render={ () => <Setting />}/>
                </section>
              </Suspense >
            </Switch>
          </main>
        </div>
      </BrowserRouter>

    );
  } 
}

const mapStateToProps = (state: AppStateType) => {
  return {
    initialized: state.app.initialized
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, {initializeApp}),
)(App)


// Types
type PropsType = MapPropsType & DispatchPropsType

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  initializeApp: () => void
}


