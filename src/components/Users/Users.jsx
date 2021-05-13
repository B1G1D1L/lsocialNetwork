import React from 'react';
import style from './Users.module.css';

const Users = (props) => {
  return <div>
    {
      props.users.map(user => <div key = {user.id} className ={style.user}>
        <div className = {style.userAvatar}>
          <img className = {style.photo} src={user.photo} alt="Avatar" />

          { user.followed 
            ? <button onClick = { () => props.unfollow(user.id) }>Unfollow</button> 
            : <button onClick = { () => props.follow(user.id)   }>Follow</button> }

        </div>
  
        <div className = {style.userInfo}>
          <div className = {style.name}>
            <strong>{user.fullName}</strong>
            <div className = {style.status}>{user.status}</div>
          </div>
  
          <div>
            <div className = {style.location}>
              <span >{user.location.country}</span>
              <span >{user.location.sity}</span>
            </div>
          </div>
        </div>
  
      </div>
      )
    }
  </div>
}

export default Users;