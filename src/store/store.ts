import { configureStore } from '@reduxjs/toolkit'
import authorizationSlice  from './reducers/authorization'

export const store = configureStore({
  reducer: {
    auth: authorizationSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch