import React, { useEffect, useState } from 'react';
import s from './User.module.css';

const UserStatusHooks = (props) => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(' ');

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.velue);
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