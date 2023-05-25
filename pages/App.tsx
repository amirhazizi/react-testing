import React from "react"
import type { RootState } from "./store"
import { useSelector, useDispatch } from "react-redux"
import { add, remove, startEdit, endEdit, reset } from "./todoSlicer"
import { useAutoAnimate } from "@formkit/auto-animate/react"

import { AiFillDelete } from "react-icons/ai"
import { FiEdit } from "react-icons/fi"

import {
  GlobalStyle,
  Container,
  From,
  SingleTodo,
  SingleTodoRemoveBtn,
  SingleTodoEditBtn,
  TodosContainer,
  ResetTodosBtn,
} from "./styledComponents"

export default function App() {
  const todos = useSelector((state: RootState) => state.todos.todos)
  const isEdit = useSelector((state: RootState) => state.todos.isEdit)
  const dispatch = useDispatch()
  const [value, setValue] = React.useState("")
  const [parent] = useAutoAnimate()
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (value.length > 0 && !isEdit) {
      dispatch(add(value))
    } else if (value.length > 0 && isEdit) {
      dispatch(endEdit(value))
    }
    setValue("")
  }

  return (
    <main>
      <GlobalStyle />
      <Container>
        <From onSubmit={handleSubmit}>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type='text'
            name=''
            id=''
          />
          <button type='submit'>Submit</button>
        </From>
        <TodosContainer ref={parent}>
          {todos.map((todo) => {
            const { content, id } = todo
            return (
              <SingleTodo key={id}>
                <h1>{content}</h1>
                <div>
                  <SingleTodoRemoveBtn onClick={() => dispatch(remove(id))}>
                    <AiFillDelete fill='white' />
                  </SingleTodoRemoveBtn>
                  <SingleTodoEditBtn
                    onClick={() => {
                      dispatch(startEdit({ id, content }))
                      setValue(content)
                    }}
                  >
                    <FiEdit fill='white' />
                  </SingleTodoEditBtn>
                </div>
              </SingleTodo>
            )
          })}
          {todos.length > 0 && (
            <ResetTodosBtn onClick={() => dispatch(reset())}>
              Remove All
            </ResetTodosBtn>
          )}
        </TodosContainer>
      </Container>
    </main>
  )
}
