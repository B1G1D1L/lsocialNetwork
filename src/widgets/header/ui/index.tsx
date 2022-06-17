import React from 'react'
import { Link } from 'react-router-dom'

import styles from './styles.module.css'
import { Field } from 'shared/ui'
import { Logo } from 'shared/ui/logo'

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
      <div className="container">
        <Logo />

        <div className={styles.header_body}>
          <form onSubmit={onSubmitSearch} className={styles.header__form}>
            <Field
              value={value}
              onChange={handleChange}
              placeholder="Search for something here..."
              startButtom
            />
          </form>
          <Link to="/profile" className={styles.profile}>
            <h3>Saleh Ahmed</h3>
            <span className={styles.profileAvatar}>
              <img
                src="https://otkritkis.ru/wp-content/uploads/2021/10/ava-180.jpg"
                alt=""
              />
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}
