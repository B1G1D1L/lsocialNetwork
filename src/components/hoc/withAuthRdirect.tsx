import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AppStateType } from '../../Redax/redax-store';

const mapStateToPropsForRedirect = (state: AppStateType) => ({
  isAuth: state.auth.isAuth
});

export function withAuthRedirect<WCP>(WrapperComponent: React.ComponentType<WCP>) {

  const RedirectComponent: React.FC<PropsType & DispatchPropsType> = (props) => {
    let {isAuth, ...restProps} = props

    if(!isAuth) return <Redirect to='/login' />

    return <WrapperComponent {...restProps as unknown as WCP} />
  }
  

  let ConnectedAuthRedirectComponent = connect<PropsType, {}, DispatchPropsType, AppStateType>(mapStateToPropsForRedirect)(RedirectComponent);

  return ConnectedAuthRedirectComponent;
}


// Types
type PropsType = ReturnType<typeof mapStateToPropsForRedirect>
type DispatchPropsType = {
  face: () => void
}