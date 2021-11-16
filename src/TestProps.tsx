import { connect, ConnectedProps } from 'react-redux';
import React from 'react'
import { AppStateType } from './Redax/redax-store';

const TestProps: React.FC<AppProps> = (props) => {
  return (
    <div>
      {props.userId}
      {props.text}
      <h1>Hello workd</h1>
    </div>
  )
}

// Connect HOC
const StoreEnhancer = connect(
  (state: AppStateType) => ({
    userId: state.auth.id,
    isAuth: state.auth.isAuth
  }),
  {}
) 
const TestProps2 = StoreEnhancer(TestProps)

export { TestProps2 as TestProps }


// Types
type AppProps = ConnectedProps<typeof StoreEnhancer> & {text: string}
