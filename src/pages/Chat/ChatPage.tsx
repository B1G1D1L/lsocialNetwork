import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { MessageType } from '../../api/chat-api'
import { MessageDataType } from '../../Redax/reducers/message-reducer'

const ChatPage = () => {
  return (
    <div>
      <Chat />
    </div>
  )
}

const Chat = () => {
  const [WsChannel, setWsChannel] = useState<WebSocket | null>(null)

  // Создать канал
  useEffect(() => {
    let ws: WebSocket

    const closeHandler = () => {
      console.log('CLOSE WS')
      setTimeout(() => createChannel, 3000)
    }

    const createChannel = () => {
        ws?.removeEventListener('close', closeHandler)
        ws?.close()
      ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
      ws.addEventListener('close', closeHandler)

      setWsChannel(ws)
    }

    createChannel()

    return () => {
      ws.removeEventListener('close', closeHandler)
      ws.close()
    }
  }, [])


  return (
    <div>
      <Messages WsChannel={WsChannel} />
      <AddMessage WsChannel={WsChannel}/>
    </div>
  )
}


const Messages: React.FC<{WsChannel: WebSocket | null}> = ({WsChannel}) => {
  const [messages, setMessages] = useState<MessageType[]>([])

  useEffect(() => {
    const messageHandler = (e: MessageEvent<any>) => {
      let newMessages = JSON.parse(e.data)
      setMessages((prevMessages) => [...prevMessages, ...newMessages])
    }

    WsChannel?.addEventListener('message', messageHandler)

    // Отписка на собитие
    return () => {
      WsChannel?.removeEventListener('message', messageHandler)
    }
  }, [WsChannel])

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


const AddMessage: React.FC<{WsChannel: WebSocket | null}> = ({WsChannel}) => {
  const [message, setMessage] = useState('')
  const [readyStatus, setReadyStatus] = useState<'ready' | 'pending'>('pending')

  useEffect(() => {
    const openHandler = () => {
      setReadyStatus('ready')
    }

    WsChannel?.addEventListener('open', openHandler)

    // Удаление обработчика
    return () => {
      WsChannel?.removeEventListener('open', openHandler)
    }
  }, [WsChannel])
  
  const sendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(message) {
      WsChannel?.send(message)
      setMessage('')
    }
  }

  const messageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  }

  return(
    <form onSubmit={sendMessage}>
      <textarea name="message" id="message" value={message} onChange={messageChange}/>
      <button 
        disabled={WsChannel === null || readyStatus !== 'ready'} 
        type='submit'
      >send</button>
    </form>
  )
}




export default ChatPage


// Types
