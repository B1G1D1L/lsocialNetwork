import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import style from './Login.module.css';
import { login } from './../../Redax/auth-reducer';
import { Redirect } from 'react-router';

const Login = (props) => {
  const submit = (value) => {
    let {email, password, rememberMe} = value;

    props.login(email, password, rememberMe);
  }

  if(props.isAuth) {
    return <Redirect to={'/profile'} />
  }

  return <LoginReduxForm onSubmit={submit} />
}


const LoginForm = (props) => {
  return <div>
    <h1>Login</h1>
    <form onSubmit={props.handleSubmit}>
      <Field type="text" component='input' name='email' placeholder='email' />
      <Field type="password" component='input' name='password' placeholder='password' />
      <Field type="checkbox" component='input' name='rememberMe' /> remember me
      <button type="submit">Submit</button>
    </form>
  </div>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, {login})(Login);