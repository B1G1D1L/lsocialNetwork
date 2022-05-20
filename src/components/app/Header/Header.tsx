import React, { FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'

import logo from '@assets/image/logo.svg'
import { Field } from '@components/app'

import styles from './Header.module.css'


export const Header = () => {
  const [value, setValue] = useState('')

  const handleChange = (value: string) => {
    setValue(value)
  }

  const onSubmitSearch = (event: FormEvent<HTMLFormElement>) => {
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

          <Link to='/feed' className={cn(styles.logo, 'container__side')}>
            <span>
              <img src={logo} alt="logo" />
            </span>
            <h2>BceTi</h2>
          </Link>

          <div className="container--small">
            <form onSubmit={onSubmitSearch} className={styles.header__form}>
              <Field
                placeholder='Search for something here...'
                onChange={handleChange}
              />
            </form>
          </div>

          <div className={cn(styles.user, 'container__side')}>
            <h3 className={styles.user__name}>Saleh Ahmed</h3>
            <span className={styles.user__avatar}>
              <img src="https://otkritkis.ru/wp-content/uploads/2021/10/ava-180.jpg" alt="" />
            </span>
          </div>

        </div>
      </div>
    </header>
  )
}
