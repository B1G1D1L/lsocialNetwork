let subscrubers = {
  'messages-reseived': [] as messagesReseivedSubscrubeType[],
  'status-changed': [] as statusChargetSubscrubeType[]
} 

let ws: WebSocket

const closeHandler = (e: Event) => {
  console.log('CLOSE WS')
  notifySubscribesAboutStatus('panding')
  setTimeout(createChannel, 3000)
}

const messageHandler = (e: MessageEvent<any>) => {
  let newMessages = JSON.parse(e.data)
  subscrubers['messages-reseived'].forEach(sub => sub(newMessages))
}

const openHandler = () => {
  notifySubscribesAboutStatus('ready')
}

const errorHandler = () => {
  notifySubscribesAboutStatus('error')  
}

const notifySubscribesAboutStatus = (status: statusType) => {
  subscrubers['status-changed'].forEach(sub => sub(status))
}

const cleanUp = () => {
  ws?.removeEventListener('close', closeHandler)
  ws?.removeEventListener('message', messageHandler)
  ws?.removeEventListener('open', openHandler)
  ws?.removeEventListener('error', errorHandler)
}

const createChannel = () => {
  cleanUp()
  ws?.close()
  ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
  ws.addEventListener('close', closeHandler)
  ws.addEventListener('message', messageHandler)
  ws.addEventListener('open', openHandler)
  ws.addEventListener('error', errorHandler)
}


export const chatAPI = {

  start() {
    createChannel()
  },
  stop() {
    cleanUp()
    subscrubers['messages-reseived'] = []
    subscrubers['status-changed'] = []
    ws?.close()
  },
  subscrube(eventName: eventNameType, callback: callbackType) {
    //@ts-ignore
    subscrubers[eventName].push(callback)
  },
  unsubscrube(eventName: eventNameType, callback: callbackType) {
    //@ts-ignore
    subscrubers[eventName].filter( s => s !== callback )
  },
  sendMessage(message: string) {
    ws.send(message)
  }

}


// Types
type messagesReseivedSubscrubeType = (message: MessageType[]) => void
type statusChargetSubscrubeType = (status: statusType) => void
type callbackType = messagesReseivedSubscrubeType | statusChargetSubscrubeType

export type MessageType = {
  message: string
  photo: string
  userId: number
  userName: string
}

type eventNameType = 'messages-reseived' | 'status-changed'
export type statusType = 'panding' | 'ready' | 'error'