import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './features/counter/counterSlice'
import authSlice from './features/auth/authSlice'




export const store = configureStore({
  reducer: {
    counter : counterSlice,
    auth: authSlice,
  },
})