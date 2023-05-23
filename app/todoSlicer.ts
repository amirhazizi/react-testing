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
    // delete: (state, action) => {
    //   state.value += action.payload
    // },
    // edit: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { add, remove } = todosSlice.actions

export default todosSlice.reducer
