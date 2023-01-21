import { createSlice } from '@reduxjs/toolkit'

export const kanbanTodos = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    items: [],
    itemsEdit: {},
  },
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload
    },
    setItems: (state, action) => {
      state.items = action.payload
    },
    setItemsEdit: (state, action) => {
      state.itemsEdit = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { setTodos, setItems, setItemsEdit } = kanbanTodos.actions

export default kanbanTodos.reducer