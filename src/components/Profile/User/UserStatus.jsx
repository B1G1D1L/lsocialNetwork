import React from 'react';
import s from './User.module.css';

class UserStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status
  }

  activeEditMode() {
    this.setState({
      editMode: true
    });
  }

  deactivateEditMode() {
    this.setState({
      editMode: false
    });

    this.props.updateStatus(this.state.status)
  }

  onChangeStatus(e) {
    let value = e.currentTarget.value
    this.setState({
      status: value
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render () {
    return (
      <div>
        {!this.state.editMode ? 
          <div>
            <span
              onClick={this.activeEditMode.bind(this)}
              className={s.user__status} >{this.state.status || 'No status'}</span>
          </div>

        : <div>
            <input 
              onChange={this.onChangeStatus.bind(this)}
              autoFocus={true}
              onBlur={this.deactivateEditMode.bind(this)}
              defaultValue={this.state.status}
              placeholder="nonon" />
          </div>
        }
      </div>
    )
  }
};


export default UserStatus;