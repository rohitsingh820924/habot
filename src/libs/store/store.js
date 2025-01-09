import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './features/loginSlice'
import authReducer from './features/authSlice'

export const store = configureStore({
  reducer: {
    login: loginReducer,
    auth: authReducer,
  },
})