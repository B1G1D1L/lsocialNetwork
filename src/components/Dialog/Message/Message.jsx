import React from 'react';
import s from './../Dialog.module.css';

const Message = props => {
  return (
    <div className={s.dialog}>
      <div>{props.message}</div>
    </div>
  );
}

export default Message;