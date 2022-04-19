import React from 'react'
import './CreateTodoButton.css'

function CreateTodoButton(props) {
    const onClickButton = () => {
      props.setOpenModal(true)
    }
    
    return (
      <button
        className="CreateTodoButton"
        onClick={onClickButton}
      >
        <ion-icon name="add-circle"></ion-icon>
      </button>
    )
  }

export { CreateTodoButton }
