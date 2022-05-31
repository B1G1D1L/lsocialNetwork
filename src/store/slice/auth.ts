import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface authState {
  data: { id: number, email: string, login: string } | {}
  messages: string[]
  resultCode: number | null
  fieldsErrors: string[] | null
}


let initialState: authState = {
  data: {},
  messages: ['hello', '1123'],
  resultCode: null,
  fieldsErrors: null,
}

export const auth = createSlice({
  name: 'authName',
  initialState,
  reducers: {
    getAuthDataOwner: (state, action: PayloadAction<string>) => {
      state.messages.push(action.payload)
    }
  }
})

export const { getAuthDataOwner } = auth.actions

export default auth.reducer