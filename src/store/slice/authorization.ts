import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface authorizationState {
  data: { id: number, email: string, login: string } | {}
  messages: string[]
  resultCode: number | null
  fieldsErrors: string[] | null
}


let initialState: authorizationState = {
  data: {},
  messages: ['hello', '1123'],
  resultCode: null,
  fieldsErrors: null,
}

export const authorizationSlice = createSlice({
  name: 'authName',
  initialState,
  reducers: {
    getAuthDataOwner: (state, action: PayloadAction<string>) => {
      state.messages.push(action.payload)
    }
  }
})

export const { getAuthDataOwner } = authorizationSlice.actions

export default authorizationSlice.reducer