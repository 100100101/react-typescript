import React, { useEffect, useState } from 'react'
import { TodoForm } from '../components/TodoForm'
import { TodoList } from '../components/TodoList'
import { ITodo } from '../interfaces'
declare var confirm: (message: string) => boolean
export const TodosPage: React.FC = () => {
  // const [todos, setTodos] = useState<Array<ITodo>>([])
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addHandler = (title: string) => {
    if (!title) {
      return
    }
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false,
    }
    setTodos(prevTodos => [newTodo, ...prevTodos])
  }

  const toggleHandler = (id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      }),
    )
  }

  const removeHandler = (id: number) => {
    const isConfirm: boolean = confirm('Вы уверены, что хотите удалить задачу?')
    if (!isConfirm) {
      return
    }
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }
  return (
    <>
      <TodoForm onAdd={addHandler} />
      <TodoList
        todos={todos}
        onRemove={removeHandler}
        onToggle={toggleHandler}
      />
    </>
  )
}
