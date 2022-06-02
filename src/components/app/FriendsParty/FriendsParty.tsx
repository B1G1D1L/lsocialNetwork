import React, { FormEvent, useState } from 'react'
import cn from 'classnames'

import { Field, DotButton } from '@components/app'

import styles from './FriendsParty.module.css'

const fakeFriends = [
  { 
    id: 1,
    name: 'Diana Pugachovads',
    online: false,
    visit: '15 min',
    avatar: null
  },
  {
    id: 2,
    name: 'Yura Pricadsfgsgsdgsgfs',
    online: true,
    visit: '',
    avatar: 'https://i.pinimg.com/736x/7b/42/4a/7b424a30b80d383ed34a40135f84a305.jpg'
  },
  {
    id: 3,
    name: 'Diana Pugachova',
    online: false,
    visit: '2 min',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: 4,
    name: 'Yura Prica',
    online: true,
    visit: '',
    avatar: 'https://i.pinimg.com/736x/7b/42/4a/7b424a30b80d383ed34a40135f84a305.jpg'
  },
  {
    id: 5,
    name: 'Diana Pugachova',
    online: false,
    visit: '2 min',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: 6,
    name: 'Yura Prica',
    online: true,
    visit: '',
    avatar: 'https://i.pinimg.com/736x/7b/42/4a/7b424a30b80d383ed34a40135f84a305.jpg'
  },
  {
    id: 7,
    name: 'Diana Pugachova',
    online: false,
    visit: '10 min',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  },
  {
    id: 8,
    name: 'Yura Prica',
    online: true,
    visit: '',
    avatar: 'https://i.pinimg.com/736x/7b/42/4a/7b424a30b80d383ed34a40135f84a305.jpg'
  },
]




export const FriendsParty = () => {
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const onSearchFriends = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(value)
  }

  // Заглушка
  React.useEffect(() => {
    console.log(value)
  }, [value])

  return (
    <div className={styles.aside}>
      <aside className={styles.aside__wrapper}>
        <form onSubmit={onSearchFriends} >
          <Field
            onChange={handleChange}
            value={value}
            maxWidth='100%'
            placeholder="Search Friends!"
          />
        </form>

        <div className={styles.friends}>
          <div className={styles.friends__header}>
            <h4 className={styles.friends__title}>Friends</h4>
            <DotButton />
          </div>

          <div className={cn(styles.friends__body, styles.body)}>
            {fakeFriends.map(item => (
              <Friend
                key={item.id}
                {...item}
              />
            ))}
          </div>
        </div>
      </aside>
    </div>
  )
}


interface PropsFriend {
  id: number,
  name: string,
  online?: boolean,
  visit?: string,
  avatar: string | null,
}

const Friend = (props: PropsFriend) => {
  const { name, avatar, online = false, visit = '1 min' } = props

  const lengthName = online ? 19 : 15
  const shortName = name.length > 16 ? name.slice(0, lengthName) + '...' : name
  const splitName = name.split(' ')
  const initials = splitName[0][0] + splitName[1][0]

  return (
    <div className={styles.friend}>
      <div className={styles.friend__avatar}>
        {avatar
          ? <img className={cn('avatar', 'avatar_small')} src={avatar} alt={name} />
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



