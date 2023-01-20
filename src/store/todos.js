import { createSlice } from '@reduxjs/toolkit'

export const kanbanTodos = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    items: [],
  },
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload
    },
    setItems: (state, action) => {
      state.items = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { setTodos, setItems } = kanbanTodos.actions

export default kanbanTodos.reducer