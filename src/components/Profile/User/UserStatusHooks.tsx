import React, { ChangeEvent, FocusEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStatusSL } from '../../../Redax/selectors/profile-selectors';
import s from './User.module.css';


const UserStatusHooks: React.FC = (props) => {
  const dispatch = useDispatch()
  const status = useSelector(getStatusSL)

  const updateStatus = (newStatus: string) => {
    dispatch(updateStatus(newStatus))
  }

  const [editMode, setEditMode] = useState<boolean>(false); // Полe редактирования статуса
  const [newStatus, setStatus] = useState<string>(' ');


  useEffect(() => {
    setStatus(status)
  }, [status]);

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = (e: FocusEvent<HTMLInputElement>) => {
    const newStatus = e.target.value;
    updateStatus(newStatus);
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
            className={s.user__status} >{newStatus || 'No status'}
          </span>
        </div>
        :
        <div>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={deactivateEditMode}
            defaultValue={newStatus}
            placeholder="nonon"
          />
        </div>
      }
    </div>
  )
}

export default UserStatusHooks;