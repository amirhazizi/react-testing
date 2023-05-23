"use client"

import React from "react"
import type { RootState } from "./store"
import { useSelector, useDispatch } from "react-redux"
import { add, remove } from "./todoSlicer"

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
} from "./styledComponents"

export default function App() {
  const todos = useSelector((state: RootState) => state.todos.todos)
  const dispatch = useDispatch()
  const [value, setValue] = React.useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (value.length > 0) {
      dispatch(add(value))
      setValue("")
    }
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
        <TodosContainer>
          {todos.map((todo) => {
            const { content, id } = todo
            return (
              <SingleTodo key={id}>
                <h1>{content}</h1>
                <div>
                  <SingleTodoRemoveBtn onClick={() => dispatch(remove(id))}>
                    <AiFillDelete />
                  </SingleTodoRemoveBtn>
                  <SingleTodoEditBtn>
                    <FiEdit />
                  </SingleTodoEditBtn>
                </div>
              </SingleTodo>
            )
          })}
        </TodosContainer>
      </Container>
    </main>
  )
}
