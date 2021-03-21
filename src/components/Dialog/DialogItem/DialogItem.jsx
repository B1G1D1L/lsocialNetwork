import React from 'react';
import { NavLink } from 'react-router-dom';
// import s from './../Dialog.module.css';

const DialogItem = props => {
  return (
    <div>
      <NavLink to={'/message/' + props.id}>{props.name}</NavLink>
    </div>
  );
}


export default DialogItem;