import React from 'react'
import './TodoCounter.css'


function TodoCounter({ totalTodos, completedTodos }) {

  return(
    <React.Fragment>
      <h1 className="TodoTittle"> TASKER</h1>
      <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
    </React.Fragment>
  )
}

export { TodoCounter }
