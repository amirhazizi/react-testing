import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

*,::before,::after{
    margin:0;
    padding:0;
    box-sizing:content-box
  }
body{
  font-family: 'Lato', sans-serif;
}
main{
  display:grid;
  min-height:100vh;
  place-items:center;
}
main>div{
  width:min(90vw,1000px);

}`

export const From = styled.form`
  display: flex;
  gap: 1rem;
  justify-content: center;
  input {
    border-radius: 2rem;
    width: 15rem;
    padding: 0.75rem 0.5rem;
    padding-left: 1.3rem;
    border: 1px solid gray;
    &:focus {
      outline: none;
    }
  }
  button {
    border: none;
    background-color: #3ad076;
    font-size: 1rem;
    color: white;
    border-radius: 2rem;
    padding: 0.2rem 0.8rem;
    cursor: pointer;
    transition: all 250ms;
    font-weight: 700;

    &:hover {
      background-color: #6bed9f;
    }
  }
`

export const SingleTodo = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #dfdfdf;
  padding: 1rem 1.2rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  div {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    button {
      padding: 0.5rem;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: all 250ms;
      fill: white;
    }
  }
`
export const SingleTodoRemoveBtn = styled.button`
  background: red;
  &:hover {
    background: #f05050;
  }
`
export const SingleTodoEditBtn = styled.button`
  background: green;
  &:hover {
    background: #70c190;
  }
`
export const Container = styled.div`
  margin: 0 auto;
  display: grid;
  gap: 5rem;
`
export const TodosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem 0;
`
export const ResetTodosBtn = styled.button`
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 250ms;
  width: fit-content;
  background-color: red;
  color: white;
  margin: 0 auto;
  margin-top: 2rem;
`
