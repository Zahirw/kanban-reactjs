import { createSlice } from '@reduxjs/toolkit'

export const kanbanTodos = createSlice({
  name: 'todos',
  initialState: {
    todos: []
  },
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { setTodos } = kanbanTodos.actions

export default kanbanTodos.reducer