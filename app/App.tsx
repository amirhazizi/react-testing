"use client"

import React from "react"
import type { RootState } from "./store"
import { useSelector, useDispatch } from "react-redux"
import { add, remove } from "./todoSlicer"

import { AiFillDelete } from "react-icons/ai"

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
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type='text'
          name=''
          id=''
        />
        <button type='submit'>submit</button>
      </form>
      <div>
        {todos.map((todo) => {
          const { content, id } = todo
          return (
            <div key={id}>
              <h1>{content}</h1>
              <button onClick={() => dispatch(remove(id))}>
                <AiFillDelete />
              </button>
            </div>
          )
        })}
      </div>
    </main>
  )
}
