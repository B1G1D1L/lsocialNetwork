import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'

import styles from './Header.module.css'
import logo from './../../../assets/image/logo.svg'
import { Field } from '../'


export const Header = () => {
  const [value, setValue] = useState('')

  const handleChange = (value: string) => {
    setValue(value)
  }

  const handleSubmit = (value: string) => {
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
            <div className={styles.header__form}>
              <Field
                placeholder='Search for something here...'
                onChange={handleChange}
                onSubmit={handleSubmit}
              />
            </div>
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
