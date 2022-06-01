import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface MessagesStateType {
  user: string
  lastMessage: string
  countMessage: number
}

const initialState: MessagesStateType[] = [
  {
    user: 'nhfkzkzk',
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