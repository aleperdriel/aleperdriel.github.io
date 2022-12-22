import React from 'react'
import Todo from './Todo'

export default function TodoList({todos, checked}) {
  return (
    todos.map(todo => {
        return <Todo key={todo.id} todo={todo} onChecked={checked}/>
    })
  )
}
