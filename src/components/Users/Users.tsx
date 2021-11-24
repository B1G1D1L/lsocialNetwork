import React, { useEffect } from 'react';
import { Field, Form, Formik } from 'formik';

import style from './Users.module.css';

import { Nullable } from '../../Redax/redax-store';
import User from './User';
import Preloader from '../common/Preloader/Preloader';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPage, getFilter, getFollowingProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from '../../Redax/selectors/users-selectors';
import { follow, requestUsers, unfollow } from '../../Redax/reducers/users-reducer';
import Paginator from '../common/Paginator/Paginator';
import { useHistory } from 'react-router';
import { ContactlessOutlined } from '@mui/icons-material';
const queryString = require('query-string');


const Users: React.FC = (props) => {
  
  const dispatch = useDispatch();
  const totalUsersCount = useSelector(getTotalUsersCount)
  const pageSize = useSelector(getPageSize)
  const currentPage = useSelector(getCurrentPage)
  const users = useSelector(getUsers)
  const isFetching = useSelector(getIsFetching)
  const followingProgress = useSelector(getFollowingProgress)
  const filter = useSelector(getFilter)
  const history = useHistory()

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

  useEffect(() => {
    const parsed = queryString.parse(history.location.search) as {page: string, term: string, friend: string}

    let actualPage = currentPage
    let actualFilter = filter

    if(parsed.page) actualPage = Number(parsed.page)
    if(parsed.term) actualFilter = {...actualFilter, term: parsed.term}
    if(parsed.friend) actualFilter = {...actualFilter, friend: parsed.friend === 'null' ? null : parsed.friend === 'true' ? true : false }

    dispatch(requestUsers(pageSize, actualPage, actualFilter))
  },[])

  useEffect(() => {
    const query: QueryParams = {}

    if(!!filter.term) query.term = filter.term
    if(filter.friend !== null) query.friend = filter.friend
    if(currentPage !== 1) query.page = String(currentPage)

    console.log()

    history.push({
      pathname: 'users',
      search: queryString.stringify(query)
    })
  }, [filter, currentPage])



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

  const filter = useSelector(getFilter)
  const initialValues: FormFilter = { term: filter.term, friend: String(filter.friend) as FriendFormType }

  return(
  <div>
    <Formik
      enableReinitialize
      initialValues = {initialValues}
      onSubmit={(values, { setSubmitting }) => {
        let FormValue = {
          term: values.term,
          friend: values.friend === 'null' ? null : values.term === 'false' ? false : true 
        }
        onSumit(FormValue.term, FormValue.friend)
        setSubmitting(false)
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="term" placeholder='Поиск Людей' />
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
  term: string
  friend: FriendFormType
}
type FriendFormType = 'null' | 'false' | 'true'

type FormProps = {
  onSumit: (filter: string, friend: Nullable<boolean>) => void
}

type QueryParams = {
  term?: string
  friend?: boolean
  page?: string
}

