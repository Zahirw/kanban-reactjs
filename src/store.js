import { configureStore } from '@reduxjs/toolkit'
import kanbanReducer from './store/todos'

export default configureStore({
  reducer: {
    todos: kanbanReducer
  }
})