import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MessageType } from '../../api/chat-api'
import { AppStateType } from '../../Redax/redax-store'
import { sendMessage, startMessagesListening, stopMessagesListening } from '../../Redax/reducers/chat-reducer'

const ChatPage = () => {
  return (
    <div>
      <Chat />
    </div>
  )
}

const Chat = () => {
  const dispatch = useDispatch()

  // Создать канал
  useEffect(() => {
    dispatch(startMessagesListening())

    return () => {
      dispatch(stopMessagesListening())
    }
  }, [])

  return (
    <div>
      <Messages />
      <AddMessage />
    </div>
  )
}


const Messages: React.FC = () => {
  const messages = useSelector((state: AppStateType) => state.chat.messages)

  return (
    <div style={{height: '500px', overflowY: 'auto'}}>
      {messages.map((m, index) => <Message message={m} key={index} />)}
    </div>
  )
}

const Message: React.FC<{message:MessageType}> = ({message}) => {

  return (
    <div style={{display: 'flex', margin: '10px'}}>
      <img 
        style={{width: '60px', marginRight: '10px'}} 
        src={message.photo} 
        alt={message.userName} 
      />
      <div>
        <b>{message.userName}</b>
        <div>{message.message}</div>
        <br/>
      </div>
    </div>
  )
}


const AddMessage: React.FC = () => {
  const [message, setMessage] = useState('')
  const [readyStatus, setReadyStatus] = useState<'ready' | 'pending'>('pending')

  const sendMessageHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(message) {
      sendMessage(message)
      setMessage('')
    }
  }

  const messageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  }

  return(
    <form onSubmit={sendMessageHandler}>
      <textarea name="message" id="message" value={message} onChange={messageChange}/>
      <button 
        type='submit'
      >send</button>
    </form>
  )
}




export default ChatPage


// Types
