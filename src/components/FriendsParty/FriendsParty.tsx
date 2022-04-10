import React, { ChangeEvent, useState } from 'react'

import styles from './FriendsParty.module.css'
import { Field } from '../Field/Field'
import { ShortStories } from '../ShortStories/ShortStories'


export const FriendsParty = () => {
  const [value, setValue] = useState('')

  const handleChange = (value: string) => {
    setValue(value)
    console.log(value)
  }

  const handleSubmit = (value: string) => {
    console.log(value)
  }

  return (
    <div className={styles.friends}>
      <Field
        onChange={handleChange}
        onSubmit={handleSubmit}
        maxWidth='100%'
        placeholder="Search Friends!"
      />
      <ShortStories />

    </div>
  )
}



