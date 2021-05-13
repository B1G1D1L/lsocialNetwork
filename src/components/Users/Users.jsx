import React from 'react';
import style from './Users.module.css';

const Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photo: 'https://i05.fotocdn.net/s113/b8d246c1b6fd8335/user_xl/2538414040.jpg',
        followed: true,
        fullName: 'Yura',
        status: 'I am imba',
        location: { sity: 'Prokutkino', country: 'Russia' }
      },
      {
        id: 2,
        photo: 'https://i05.fotocdn.net/s113/b8d246c1b6fd8335/user_xl/2538414040.jpg',
        followed: true,
        fullName: 'Vasya',
        status: 'I am Kat',
        location: { sity: 'Moscow', country: 'Russia' }
      },
      {
        id: 3,
        photo: 'https://i05.fotocdn.net/s113/b8d246c1b6fd8335/user_xl/2538414040.jpg',
        followed: false,
        fullName: 'Yura',
        status: 'I am imba',
        location: { sity: 'Tymen', country: 'Russia' }
      },
    ])
  }

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