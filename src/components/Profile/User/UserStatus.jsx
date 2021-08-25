import React from 'react';
import s from './User.module.css';

class UserStatus extends React.Component {
  state = {
    editMode: false,
    title: "lol"
  }

  activeEditMode() {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode() {
    this.setState({
      editMode: false
    })
  }

  render () {
    return (
      <div>
        {!this.state.editMode ? 
          <div>
            <span
              onClick={this.activeEditMode.bind(this)}
              className={s.user__status} >{this.state.title}</span>
          </div>

        : <div>
            <input 
              autoFocus={true}
              onBlur={this.deactivateEditMode.bind(this)}
              defaultValue={this.state.title} />
          </div>
        }
      </div>
    )
  }
};


export default UserStatus;