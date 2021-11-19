import React from 'react';
import { NavLink } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';

import style from './Users.module.css';

import { Button } from '@mui/material';
import { UsersType } from '../../types/types';
import { Nullable } from '../../Redax/redax-store';
import User from './User';
import Preloader from '../common/Preloader/Preloader';



const Users: React.FC<PropsType> = (props) => {
  const { totalUsersCount, pageSize, currentPage, users, isFetching,
    onPageChanged, unfollow, follow, onChangeFilters
  } = props;

  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return <div>
    {/* Навигация */}
    <div className={style.numberPages}>
      {pages.map((page, index) => {
        return (
          <span
            className={currentPage === page ? style.selected : ''}
            key={index}
            onClick={(e) => { onPageChanged(page) }}
          >
            {page}
          </span>
        )
      })}
    </div>

    {/* Кол-ва людей */}
    <div className={style.numberPeople}>Люди: {totalUsersCount}</div>

    {/* Фильтр по именам */}
    <FormFilter onSumit={onChangeFilters} />

    {/* Список пользователей */}
    
    { isFetching ? <Preloader /> : 
      users.map((user) => (
        <User user={user} 
          unfollow={unfollow}
          follow={follow}
          key={user.id}
          followingProgress={props.followingProgress}
        />
      )
    )}
  </div>
}

export default Users;


// Filters form
const FormFilter: React.FC<FormProps> = ({ onSumit }) => {

  const initialValues: FormFilter = { filter: '', friend: 'null' }

  return(
  <div>
    <Formik
      initialValues = {initialValues}
      onSubmit={(values, { setSubmitting }) => {
        let FormValue = {
          filter: values.filter,
          friend: values.friend === 'null' ? null : values.friend === 'false' ? false : true 
        }
        onSumit(FormValue.filter, FormValue.friend)
        setSubmitting(false)
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="filter" placeholder='Поиск Людей' />
          <Field name="friend" as="select">
            <option value="null">All</option>
            <option value="true">Followed</option>
            <option value="false">Unfollowed</option>
          </Field>
          <button type="submit" disabled={isSubmitting}>
            Find
          </button>
        </Form>
      )}
    </Formik>
  </div>
)};



// Types
type PropsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  users: Array<UsersType>
  followingProgress: Array<number>
  isFetching: boolean


  onChangeFilters: (filters: string, friend: Nullable<boolean>) => void
  onPageChanged: (page: number) => void
  unfollow: (userId: number) => void
  follow: (userId: number) => void
} // Props

export type FormFilter = {
  filter: string
  friend: 'null' | 'false' | 'true'
}
type FormProps = {
  onSumit: (filter: string, friend: Nullable<boolean>) => void
}

