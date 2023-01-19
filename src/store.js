import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './store/index'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})