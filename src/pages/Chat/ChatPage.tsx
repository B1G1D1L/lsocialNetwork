import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { statusType } from '../../api/chat-api'
import { sendMessage, startMessagesListening, stopMessagesListening } from '../../Redax/reducers/chat-reducer'
import { getMessagesSL, getStatusWsSL } from '../../Redax/selectors/chat-selector'

const ChatPage = () => {
  return (
    <div>
      <Chat />
    </div>
  )
}

const Chat = () => {
  const dispatch = useDispatch()
  const status = useSelector(getStatusWsSL)
 
  useEffect(() => {
    dispatch(startMessagesListening())

    return () => {
      dispatch(stopMessagesListening())
    }
  })


  return (
    <div>
      {status === 'error' 
        && <div>Произошла ошибка. Пожалуйста, перезагрузите страницу</div>}
         <>
            <Messages  />
            <AddMessage status={status} />
          </>
    </div>
  )
}


const Messages: React.FC = () => {
  const messages = useSelector(getMessagesSL)

  return (
    <div style={{height: '500px', overflowY: 'auto'}}>
      {messages?.map((m, index) => <Message message={m} key={index} />)}
    </div>
  )
}

const Message: React.FC<any> = ({message}) => {

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


const AddMessage: React.FC<{status: statusType}> = ({status}) => {
  const dispatch = useDispatch()
  const [message, setMessage] = useState('')
  
  
  
  const sendMessageHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(message) {
      dispatch(sendMessage(message))
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
        disabled={status !== 'ready'} 
        type='submit'
      >send</button>
    </form>
  )
}




export default ChatPage


// Types
