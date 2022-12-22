import React from 'react'

export default function Todo( {todo, onChecked}) {
function handleTodoClick() {
    onChecked(todo.id)
}
  return (
    <div className='todo-card'>
      <input id="check" type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
      <label>{todo.name}</label>
    </div>
  )
}
