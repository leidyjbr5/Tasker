import React from 'react'
import './TodoCounter.css'


function TodoCounter({ total, completed }) {
  return(
    <React.Fragment>
      <h1 className="TodoTittle"> TASKER</h1>
      <h2 className="TodoCounter">Has completado {completed} de {total} TODOs</h2>
    </React.Fragment>
  )
}

export { TodoCounter }
