import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { AppStateType } from '../../../Redax/redax-store';
import Navigation from './Navigation';

class NavigationContainer extends React.Component<NavigationContainerProps> {

  render() {
    return(
      <Navigation myId={this.props.myId} />
    )
  }

};

const mapStateToProps = (state: AppStateType) => {
  return {
    myId: state.auth.id
  }
}

const connectHOC = connect(mapStateToProps)
const connectProps = connectHOC(NavigationContainer)

export { connectProps as NavigationContainer }


// types
type NavigationContainerProps = ConnectedProps<typeof connectHOC> & {}

