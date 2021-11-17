import React from 'react';
import { NavLink } from 'react-router-dom';
import { DialogStateType } from '../../../Redax/reducers/message-reducer';
import s from './../Dialog.module.css';

const DialogItem: React.FC<DialogItemProps> = (props) => {
  // Массив контактов
  let dialogElement = props.dialogData.map(d => 
    <NavLink
      to={'/message/' + d.id}
      key={d.id} 
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


// Types
type DialogItemProps = {
  dialogData: Array<DialogStateType>
}