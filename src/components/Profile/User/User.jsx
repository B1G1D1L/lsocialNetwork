import React from 'react';
import s from './User.module.css';

const User = (props) => {
  return (
    <div className={s.user}>

      <div>
        <img className={s.user__background} alt='Background' src={props.urlAvatar}></img>
      </div>
      
      <div className={s.user__info}>
        <div className={s.user__avatar}>
          <img src="https://cdn.wallpapersafari.com/90/43/2gzPci.jpg" alt="Avatar" />
        </div>

        <div className={s.user__description}>
          <div>Name: {props.name}</div>
          <div>Age: {props.age}</div>
          <div>Sity: {props.sity}</div>
        </div>
      </div>
    </div>
  )
};

export default User;