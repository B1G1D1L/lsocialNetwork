import React, { useEffect } from 'react';
import { Field, Form, Formik } from 'formik';

import style from './Users.module.css';

import { Nullable } from '../../Redax/redax-store';
import User from './User';
import Preloader from '../common/Preloader/Preloader';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPage, getFollowingProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from '../../Redax/selectors/users-selectors';
import { follow, requestUsers, unfollow } from '../../Redax/reducers/users-reducer';
import Paginator from '../common/Paginator/Paginator';



const Users: React.FC = (props) => {
  
  const dispatch = useDispatch();
  const totalUsersCount = useSelector(getTotalUsersCount)
  const pageSize = useSelector(getPageSize)
  const currentPage = useSelector(getCurrentPage)
  const users = useSelector(getUsers)
  const isFetching = useSelector(getIsFetching)
  const followingProgress = useSelector(getFollowingProgress)

  const onChangeFilters = (filters: string, friend: Nullable<boolean>) => {
    dispatch(requestUsers(pageSize , 1, {term: filters, friend}))
  }
  const onPageChanged = (pageNumber: number) => {
    dispatch(requestUsers(pageSize , pageNumber, {term: '', friend: false}))
  }
  const onUnfollow = (userId: number) => {
    dispatch(unfollow(userId))
  }
  const onFollow = (userId: number) => {
    dispatch(follow(userId))
  }

  useEffect( () => {
    dispatch(requestUsers(pageSize, currentPage, {term: '', friend: null}))
  },[])


  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return <div>
    {/* Навигация */}
    <Paginator
      totalItemsCount={totalUsersCount}
      pageSize={pageSize}
      currentPage={currentPage}
      onPageChanged={onPageChanged} 
      portionSize={30}
    />

    {/* Кол-ва людей */}
    <div className={style.numberPeople}>Люди: {totalUsersCount}</div>

    {/* Фильтр по именам */}
    <FormFilter onSumit={onChangeFilters} />

    {/* Список пользователей */}
    
    { isFetching ? <Preloader /> : 
      users.map((user) => (
        <User user={user} 
          key={user.id}
          unfollow={onUnfollow}
          follow={onFollow}
          keyUser={user.id}
          followingProgress={followingProgress}
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
export type FormFilter = {
  filter: string
  friend: 'null' | 'false' | 'true'
}
type FormProps = {
  onSumit: (filter: string, friend: Nullable<boolean>) => void
}

