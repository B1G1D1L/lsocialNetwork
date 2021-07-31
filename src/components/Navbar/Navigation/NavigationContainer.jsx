import React from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';

class NavigationContainer extends React.Component {

  render() {
    return(
      <Navigation myId={this.props.myId} />
    )
  }

};

const mapStateToProps = (state) => {
  return {
    myId: state.auth.userId
  }
}

export default connect(mapStateToProps)(NavigationContainer)