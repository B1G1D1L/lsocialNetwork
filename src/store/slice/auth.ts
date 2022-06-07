import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface authState {
  isAuth: boolean
  id: number | null
  email: string
  login: string
}

let initialState: authState = {
  isAuth: false,
  id: null,
  email: '',
  login: '',
}

export const auth = createSlice({
  name: 'authName',
  initialState,
  reducers: {
    authorization: (state, action: PayloadAction<authState>) => {
      state.id = action.payload.id
      state.email = action.payload.email
      state.login = action.payload.login
    },
  },
})

export const { authorization } = auth.actions

export default auth.reducer
