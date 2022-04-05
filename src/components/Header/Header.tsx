import React from 'react'

import styles from './Header.module.css'
import logo from './../../assets/image/logo.svg'


export const Header = () => {
  return (
    <div className={styles.header}>
      <div className='container'>
        <div className={styles.header__wrap}>

          <div className={styles.logo}>
            <span>
              <img src={logo} alt="logo" />
            </span>
            <h3>BceTi</h3>
          </div>

          <div className={styles.user}>
            <h3 className={styles.user__name}>Saleh Ahmed</h3>
            <span className={styles.user__avatar}>
              <img src="https://otkritkis.ru/wp-content/uploads/2021/10/ava-180.jpg" alt="" />
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}
