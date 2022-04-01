import React from 'react'
import './TodoCounter.css'


function TodoCounter() {
  return(
    <React.Fragment>
      <h1 className="TodoTittle"> TASKER</h1>
      <h2 className="TodoCounter">Has completado 2 de 3 TODOs</h2>
    </React.Fragment>
  )
}

export { TodoCounter }
