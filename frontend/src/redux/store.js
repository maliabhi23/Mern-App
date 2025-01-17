
import { configureStore } from '@reduxjs/toolkit'
import { myslace } from './slices/myslace'
export const store = configureStore({
  reducer: {
    loginform:myslace
  },
})

