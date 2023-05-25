import { render, screen, fireEvent, within } from "@testing-library/react"
import Home from "@/pages/index"

describe("input form events", () => {
  it("inital render submitBtn is disable", () => {
    render(<Home />)
    const submitBtn = screen.getByRole("button", {
      name: "Submit",
    })
    expect(submitBtn).toBeDisabled()
  })
  it("change input value submitBtn will active", () => {
    render(<Home />)
    const submitBtn = screen.getByRole("button", {
      name: "Submit",
    })
    const input = screen.getByTestId("input")
    fireEvent.change(input, { target: { value: "test" } })
    expect(submitBtn).toBeEnabled()
  })
})
describe("todo functions", () => {
  it("add new todo", () => {
    render(<Home />)
    const newTodoText = "new Todo for Test"
    const submitBtn = screen.getByRole("button", {
      name: "Submit",
    })
    const input: HTMLInputElement = screen.getByTestId("input")
    fireEvent.change(input, { target: { value: "new Todo for Test" } })
    fireEvent.click(submitBtn)
    expect(screen.getByText(newTodoText)).toBeInTheDocument()
    expect(input.value).toEqual("")
  })

  it("edit old todo", () => {
    render(<Home />)
    const newTodoText = "new Job todo for you"
    const targetTodoID = "5000"
    const targetTodo = document.getElementById(targetTodoID)
    const input: HTMLInputElement = screen.getByTestId("input")
    const submitBtn = screen.getByRole("button", {
      name: "Submit",
    })
    expect(targetTodo).toBeInTheDocument()
    if (targetTodo) {
      const editBtn = within(targetTodo).getByTestId("edit")
      const todoHeader = within(targetTodo).getByRole("heading", {
        level: 1,
      }).textContent
      fireEvent.click(editBtn)
      expect(input.value).toEqual(todoHeader)
      fireEvent.change(input, { target: { value: newTodoText } })
      fireEvent.click(submitBtn)
      expect(screen.getByText(newTodoText)).toBeInTheDocument()
      expect(input.value).toEqual("")
    }
  })
  it("remove old todo", () => {
    render(<Home />)
    const targetTodoID = "5000"
    const targetTodo = document.getElementById(targetTodoID)
    expect(targetTodo).toBeInTheDocument()
    if (targetTodo) {
      const deletBtn = within(targetTodo).getByTestId("delete")
      fireEvent.click(deletBtn)
      expect(targetTodo).not.toBeInTheDocument()
    }
  })
})
