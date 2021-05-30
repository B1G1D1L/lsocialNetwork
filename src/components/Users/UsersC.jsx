import React from 'react';
import style from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';



class Users extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() { 
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
    .then(response => {
      this.props.setUsers(response.data.items);
    })
  }

  render() {
    return <div>
      {
        this.props.users.map(user => <div key={user.id} className={style.user}>
          <div className={style.userAvatar}>

            <img className={style.photo}
              src={user.photos.large !== null ? user.photos.large : userPhoto}
              alt="Avatar" />

            {user.followed
              ? <button onClick={() => this.props.unfollow(user.id)}>Unfollow</button>
              : <button onClick={() => this.props.follow(user.id)}>Follow</button>}

          </div>

          <div className={style.userInfo}>
            <div className={style.name}>

              <strong>{user.name}</strong>

              <div className={style.status}>{user.status}</div>

            </div>

            <div>
              <div className={style.location}>
                {/* <span >{user.location.country}</span>
              <span >{user.location.sity}</span> */}
              </div>
            </div>
          </div>

        </div>
        )
      }
    </div>
  }
}

export default Users;