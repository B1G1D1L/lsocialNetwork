import React, { ChangeEvent, FocusEvent, useEffect, useState } from 'react';
import s from './User.module.css';


type PropsType = {
  status: string
  updateStatus: (newStatus: string) => void
}


const UserStatusHooks = (props: PropsType) => {

  const [editMode, setEditMode] = useState<boolean>(false);
  const [status, setStatus] = useState<string>(' ');

  useEffect(() => {
    setStatus(props.status)
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = (e: FocusEvent<HTMLInputElement>) => {
    const status = e.target.value;
    props.updateStatus(status);
    setEditMode(false);
  }

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value);
  }

  return (
    <div>
      {!editMode ?
        <div>
          <span
            onClick={activateEditMode}
            className={s.user__status} >{status || 'No status'}
          </span>
        </div>
        :
        <div>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateEditMode}
            defaultValue={status}
            placeholder="nonon"
          />
        </div>
      }
    </div>
  )
}

export default UserStatusHooks;