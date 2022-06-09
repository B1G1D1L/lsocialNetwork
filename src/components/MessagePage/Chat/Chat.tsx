import React from 'react'
import cn from 'classnames'
// import { useParams } from 'react-router-dom'

// import { db } from './../../../firebase'
// import { collection, addDoc } from "firebase/firestore"

import { ReactComponent as Info } from '@assets/image/info.svg'
import { ReactComponent as Send } from '@assets/image/send.svg'
import { DotButton, FriendsParty } from '@components/app'

import styles from './Chat.module.css'



export const Chat = () => {
  const [valueNewMsg, setValueNewMsg] = React.useState('')
  const textareaRef = React.useRef<HTMLTextAreaElement>(null)

  const onChangeNewMsg = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValueNewMsg(e.target.value)
  }

  const onSubmitMsg = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  // Changing the height of the textarea
  React.useEffect(() => {
    if(textareaRef.current) {
      textareaRef.current.style.height = '41px'
      const currentHeight = textareaRef.current.scrollHeight
      textareaRef.current.style.height = `${currentHeight + 2}px`
    }
  }, [valueNewMsg])

  // Scroll to bottom
  let scroll = React.useRef<any>(null)
  React.useLayoutEffect(() => {
    scroll.current.scrollIntoView()
  }, [])

  return (
    <div className="container__wrapper">
      <div className={cn(styles.chat, 'container__body')}>
        <div className={cn(styles.chat__header, styles.header)}>
          <div className={styles.header__user}>
            <img
              className={cn('avatar', 'avatar_small')}
              src="https://otkritkis.ru/wp-content/uploads/2021/10/ava-180.jpg"
              alt=""
            />
            <div className={styles.header__info}>
              <h3>Анастасия волочкова</h3>
              <span>Active now</span>
            </div>
          </div>
          <div className={styles.header__actions}>
            <Info />
          </div>
        </div>

        <div className={styles.body}>
          <div className={cn(styles.header__body, styles.body__wrapper)}>
            <MessageItem owner="user" />
            <MessageItem owner="friend" />
            <MessageItem owner="user" />
            <MessageItem owner="friend" />
            <MessageItem owner="friend" />
            <MessageItem owner="friend" />
            <MessageItem owner="user" />
            <MessageItem owner="user" />
            <MessageItem owner="friend" />
            <div ref={scroll} />
          </div>
        </div>

        <div className={cn(styles.chat__footer, styles.footer)}>
          <form onSubmit={onSubmitMsg}>
            <textarea
              ref={textareaRef}
              autoFocus
              rows={1}
              onChange={onChangeNewMsg}
              value={valueNewMsg}
              className={styles.footer__input}
              placeholder="Type something here..."
            />
            <button type="submit" className={styles.footer__btn}>
              <Send />
            </button>
          </form>
        </div>
      </div>

      <FriendsParty />
    </div>
  )
}

interface MessagePropsType {
  owner: 'user' | 'friend'
}

const MessageItem = (props: MessagePropsType) => {
  const { owner } = props

  return (
    <div
      className={cn(
        styles.message, 
        { [styles[`message__${owner}`]]: owner }
      )}
    >
      <img
        className={cn('avatar', 'avatar_extra-small')}
        src="https://i.insider.com/5cb8b133b8342c1b45130629?width=1136&format=jpeg"
        alt=""
      />
      <p>
        y name is Sergey. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Officia quibusdam commodi expedita deleniti dolores, est voluptas
        id laboriosam quas deserunt?
      </p>
      <span className={styles.message__time}>24:20</span>
      <DotButton />
    </div>
  )
}
