import React from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'

import { useAppDispatch, useAppSelector } from 'hook/hooks'
import logo from '@assets/image/logo.svg'
import { Field } from '@components/app'

import styles from './Header.module.css'


export const Header = () => {
  const [value, setValue] = React.useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const onSubmitSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(value)
  }

  // Заглушка
  React.useEffect(() => {
    console.log(value)
  }, [value])

  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.header__wrap}>

          <Link to='/feed' className={cn(styles.logo, 'container__side', 'container__side--left')}>
            <span>
              <img src={logo} alt="logo" />
            </span>
            <h2>BceTi</h2>
          </Link>

          <div className="container--small">
            <form onSubmit={onSubmitSearch} className={styles.header__form}>
              <Field
                value={value}
                onChange={handleChange}
                placeholder='Search for something here...'
              />
            </form>
          </div>

          <Link 
            to='/profile' 
            className={cn(styles.user, 'container__side', 'container__side--right')}
          >
            <h3 className={styles.user__name}>Saleh Ahmed</h3>
            <span className={styles.user__avatar}>
              <img src="https://otkritkis.ru/wp-content/uploads/2021/10/ava-180.jpg" alt="" />
            </span>
          </Link>

        </div>
      </div>
    </header>
  )
}
