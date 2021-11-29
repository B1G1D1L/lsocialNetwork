import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'

let ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

const ChatPage = () => {
  return (
    <div>
      <Chat />
    </div>
  )
}

const Chat = () => {

  return (
    <div>
      <Messages />
      <AddMessage />
    </div>
  )
}

const Messages = () => {
  const [messages, setMessages] = useState<MessageType[]>([])

  useEffect(() => {
    ws.addEventListener('message', (e) => {
      let newMessages = JSON.parse(e.data)
      setMessages((prevMessages) => [...prevMessages, ...newMessages])
    })
  }, [])

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

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    ws.send(message)
  }

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  }

  return(
    <form onSubmit={onSubmit}>
      <textarea name="message" id="message" value={message} onChange={onChange}/>
      <button type='submit'>send</button>
    </form>
  )
}




export default ChatPage


// Types
type MessageType = {
  message: string
  photo: string
  userId: number
  userName: string
}