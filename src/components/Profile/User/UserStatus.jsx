import React from 'react';

class UserStatus extends React.Component {
  state = {
    editMode: false,
    title: ''
  }

  activeEditMode() {
    this.setState = {
      editMode: true
    }
  }

  render () {
    return (
      <div>
        {!this.state.editMode ? 
          <div>
            <span>{this.state.title}</span>
          </div>

        : <div>
            <input value={this.state.title} />
          </div>
        }
      </div>
    )
  }
};


export default UserStatus;