let subscrubers = [] as subscrube[]

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
}

const messageHandler = (e: MessageEvent<any>) => {
  let newMessages = JSON.parse(e.data)
  subscrubers.forEach(s => s(newMessages))
}

export const chatAPI = {

  subscrube(callback: subscrube) {
    subscrubers.push(callback)
    // Отписаться
    return (callback: subscrube) => {
      subscrubers.filter(s => s !== callback)
    }
  },

}


// Types
type subscrube = (message: MessageType) => void

export type MessageType = {
  message: string
  photo: string
  userId: number
  userName: string
}