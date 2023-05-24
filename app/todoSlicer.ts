import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface TodoState {
  todos: { content: string; id: number }[]
  isEdit: boolean
  editID: number
  editContent: string
}

const initialState: TodoState = {
  todos: [{ content: "test 1", id: 5000 }],
  isEdit: false,
  editID: 0,
  editContent: "",
}

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action) => {
      const newTodo = {
        content: action.payload,
        id: new Date().getTime(),
      }
      state.todos = [...state.todos, newTodo]
    },
    remove: (state, action) => {
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload)
      state.todos = newTodos
    },
    startEdit: (state, action) => {
      state.isEdit = true
      state.editID = action.payload.id
      state.editContent = action.payload.content
    },
    endEdit: (state, action) => {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === state.editID) {
          return { id: todo.id, content: action.payload }
        }
        return todo
      })
      state.todos = newTodos
      state.editID = 0
      state.isEdit = false
      state.editContent = ""
    },
    reset: (state) => {
      state.todos = []
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, remove, startEdit, endEdit, reset } = todosSlice.actions

export default todosSlice.reducer
