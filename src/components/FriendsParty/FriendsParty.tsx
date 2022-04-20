import React, { ChangeEvent, useState } from 'react'
import cn from 'classnames'

import styles from './FriendsParty.module.css'
import { Field } from '../Field/Field'


const fakeFriends = [
  {
    name: 'Diana Pugachovads',
    online: false,
    visit: '15 min',
    avatar: null
  },
  {
    name: 'Yura Pricadsfgsgsdgsgfs',
    online: true,
    visit: '',
    avatar: 'https://i.pinimg.com/736x/7b/42/4a/7b424a30b80d383ed34a40135f84a305.jpg'
  },
  {
    name: 'Diana Pugachova',
    online: false,
    visit: '2 min',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    name: 'Yura Prica',
    online: true,
    visit: '',
    avatar: 'https://i.pinimg.com/736x/7b/42/4a/7b424a30b80d383ed34a40135f84a305.jpg'
  },
  {
    name: 'Diana Pugachova',
    online: false,
    visit: '2 min',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    name: 'Yura Prica',
    online: true,
    visit: '',
    avatar: 'https://i.pinimg.com/736x/7b/42/4a/7b424a30b80d383ed34a40135f84a305.jpg'
  },
  {
    name: 'Diana Pugachova',
    online: false,
    visit: '10 min',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    name: 'Yura Prica',
    online: true,
    visit: '',
    avatar: 'https://i.pinimg.com/736x/7b/42/4a/7b424a30b80d383ed34a40135f84a305.jpg'
  },
]




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
    <aside className={styles.aside}>
      <Field
        onChange={handleChange}
        onSubmit={handleSubmit}
        maxWidth='100%'
        placeholder="Search Friends!"
      />

      <div className={styles.friends}>
        <div className={styles.friends__header}>
          <h4 className={styles.friends__title}>Friends</h4>
          <span className={styles.friends__menu}>&bull;&bull;&bull;</span>
        </div>

        <div className={cn(styles.friends__body, styles.body)}>
          {fakeFriends.map(item => (
            <Friend
              name={item.name}
              avatar={item.avatar}
              online={item.online}
              visit={item.visit}
            />
          ))}
        </div>
      </div>

    </aside>
  )
}


interface PropsFriend {
  name: string,
  online?: boolean,
  visit?: string,
  avatar: string | null,
}

const Friend = ({ name, avatar, online = false, visit = '1 min' }: PropsFriend) => {
  const lengthName = online ? 19 : 15
  const shortName = name.length > 16 ? name.slice(0, lengthName) + '...' : name
  const splitName = name.split(' ')
  const initials = splitName[0][0] + splitName[1][0]

  return (
    <div className={styles.friend}>

      <div className={styles.friend__avatar}>
        {avatar
          ? <img src={avatar} alt={name} />
          : <span className={styles.friend__initials}>{initials}</span>
      }
      </div>
      <span className={styles.friend__name} >{shortName}</span>
      <div className={styles.friend__condition}>
        {online
          ? <span className={styles.friend__online} />
          : <span className={styles.friend__offline}>{visit}</span>
        }
      </div>
    </div>
  )
}



