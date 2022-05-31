import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface MessagesStateType {
  user: string
  online: boolean
  lastMessage: string
  countMessage: number
}

const initialState: MessagesStateType[] = [
  {
    user: 'nhfkzkzk',
    online: false,
    lastMessage: 'Привет чувак',
    countMessage: 3
  },
  
]

const messages = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    
  }
})


export default messages.reducer