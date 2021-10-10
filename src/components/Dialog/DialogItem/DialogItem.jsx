import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Dialog.module.css';

const DialogItem = props => {
  let dialogElement = props.dialogData.map(d => 
    <NavLink
      to={'/message/' + d.id}
      key={d.id} 
      // name={d.name}
    >
      {d.name}
    </NavLink> 
  );

  return (
    <div className={s.dialog__list}>
      {dialogElement}
    </div>
  );
}


export default DialogItem;