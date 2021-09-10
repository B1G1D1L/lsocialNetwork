import React from 'react';
import { reduxForm, Field } from 'redux-form';
import style from './Login.module.css';

const Login = (props) => {
  const submit = (value) => console.log(value);

  return <LoginReduxForm onSubmit={submit} />
}


const LoginForm = (props) => {
  return <div>
    <h1>Login</h1>
    <form onSubmit={props.handleSubmit}>
      <Field type="text" component='input' name='login' placeholder='login' />
      <Field type="password" component='input' name='password' placeholder='password' />
      <Field type="checkbox" component='input' name='rememberMe' /> remember me
      <button type="submit">Submit</button>
    </form>
  </div>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


export default Login;