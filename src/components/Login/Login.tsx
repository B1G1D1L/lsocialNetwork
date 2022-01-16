import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, InjectedFormProps, isDirty  } from 'redux-form';
import styles from './Login.module.css';
import { login } from '../../Redax/reducers/auth-reducer';
import { Redirect } from 'react-router';
import { required } from '../../utils/validators/validators';
import { ElementHOC } from '../hoc/element';
import { AppStateType } from '../../Redax/redax-store';


const Login: React.FC<StateType & DispatchType> = ({ login, isAuth }) => {

  const submit = (value: any) => {
    let { email, password, rememberMe } = value;
    login(email, password, rememberMe);
  }

  // Redirect
  if(isAuth) {
    return <Redirect to={'/profile'} />
  }

  return <LoginReduxForm onSubmit={submit} />
}


// Form
const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType>> = ({ handleSubmit, error }) => {
  const InputElement = ElementHOC('input');

  return <div>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>

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
      {error && <div className={styles.formSummaryError}>{error}</div>}
    </form>
  </div>
}

const LoginReduxForm = reduxForm<LoginFormValuesType>({
  form: 'login',
})(LoginForm);




const mapStateToProps = (state: AppStateType) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect<StateType, DispatchType, {}, AppStateType>(mapStateToProps, {login})(Login);


// Types
type LoginFormValuesType = {
  email: string
  password: string
  rememberMe: string
}

type StateType = ReturnType<typeof mapStateToProps>  //Map State

type DispatchType = {   
  login: (email: string, password: string, rememberMe: boolean) => void
} // Map Dispatch