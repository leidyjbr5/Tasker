import React from 'react'
import './TodoForm.css'

function TodoForm({ addTodo, setOpenModal }) {

  const [newTodoValue, setNewTodoValue] = React.useState('')

  const onCancel = () => {
    setOpenModal(false)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    addTodo(newTodoValue)
    setOpenModal(false)
  }

  const onWrite = (event) => {
    setNewTodoValue(event.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Todo</label>
      <textarea 

        value = {newTodoValue}
        onChange={onWrite}
      
        placeholder="Escribe tu tarea"
        
      />
      <div className="TodoForm-buttonContainer">
        <button 
        type="button"
        className="TodoForm-button TodoForm-button-cancel"
        onClick={onCancel}> 
         Cancelar
        </button>
        
        <button 
        type="submit"
        className="TodoForm-button TodoForm-button-add"
        > 
         Añadir Todo
        </button>

      </div>
    </form>
  )
}

export { TodoForm }