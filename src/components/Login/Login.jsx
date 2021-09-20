import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import styles from './Login.module.css';
import { login } from './../../Redax/reducers/auth-reducer';
import { Redirect } from 'react-router';
import { required } from '../../utils/validators/validators';
import { Element } from '../hoc/element';

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

const InputElement = Element('input');

const LoginForm = (props) => {
  return <div>
    <h1>Login</h1>
    <form onSubmit={props.handleSubmit}>

      <Field
        type="text"
        component={InputElement}
        name='email'
        placeholder='email'
        validate={[ required ]}
      />
      <Field
        type="password"
        component={InputElement}
        name='password'
        placeholder='password'
        validate={[ required ]}
      />
      <Field
        type="checkbox"
        component='input'
        name='rememberMe'
      />
      <span>remember Me</span>
      <button type="submit">Submit</button>
      {props.error && <div className={styles.formSummaryError}>{props.error}</div>}
    </form>
  </div>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, {login})(Login);