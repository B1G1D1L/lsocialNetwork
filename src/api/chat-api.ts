let subscrubers = [] as subscribe[]

let ws: WebSocket | null = null

const closeHandler = () => {
  console.log('CLOSE WS')
  setTimeout(() => createChannel, 3000)
}

const messageHandler = (e: MessageEvent<any>) => {
  let newMessages = JSON.parse(e.data)
  subscrubers.forEach(s => s(newMessages))
}

const createChannel = () => {
  ws?.removeEventListener('close', closeHandler)
  ws?.close()
  ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
  ws.addEventListener('close', closeHandler)
  ws.addEventListener('message', messageHandler)
}

export const chatAPI = {
  start() {
    createChannel()
  },

  stop() {
    subscrubers = []
    ws?.close()
    ws?.removeEventListener('close', closeHandler)
    ws?.removeEventListener('message', messageHandler)
  },

  subscribe(callback: subscribe) {
    subscrubers.push(callback)
    // Отписаться
    return (callback: subscribe) => {
      subscrubers.filter(s => s !== callback)
    }
  },

  unsubscribe(callback: subscribe) {
    subscrubers = subscrubers.filter(s => s !== callback)
  },

  sendMessage(message:string) {
    ws?.send(message)
  }

}


// Types
type subscribe = (message: MessageType[]) => void

export type MessageType = {
  message: string
  photo: string
  userId: number
  userName: string
}