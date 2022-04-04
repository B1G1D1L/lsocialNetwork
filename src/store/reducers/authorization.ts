import { createSlice, PayloadAction } from '@reduxjs/toolkit'

let initialState = {
  data: {} as { id: number, email: string, login: string } | {},
  messages: [] as string[] | [],
  resultCode: null as number | null,
  fieldsErrors: null as string[] | null
}

export const authorizationSlice = createSlice({
  name: 'authName',
  initialState,
  reducers: {
    getAuthDataOwner: (state, action: PayloadAction<typeof initialState>) => {
      return action.payload 
    }
  }
})

export const { getAuthDataOwner } = authorizationSlice.actions

export default authorizationSlice.reducer