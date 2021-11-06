import React, { ChangeEvent } from 'react';
import s from './User.module.css';

type PropsType = {
  status: string
  updateStatus: (newStatus: string) => void
}

type StateType = {
  status: string
  editMode: boolean
}

class UserStatus extends React.Component<PropsType, StateType> {

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

  onChangeStatus(e: ChangeEvent<HTMLInputElement>) {
    let value = e.currentTarget.value
    this.setState({
      status: value
    });
  }

  componentDidUpdate(prevProps: PropsType, prevState: StateType) {
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