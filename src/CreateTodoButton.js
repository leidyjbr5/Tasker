import react from 'react'
import './CreateTodoButton.css'

function CreateTodoButton(props){
    const onClickButton = (msg) => {
        alert (msg)
    }
    return(
        <button 
            className="CreateTodoButton"
            onClick={() => onClickButton('Aquí se abre el modal')}
            >
            
            <ion-icon name="add-circle"></ion-icon>
        </button>
    )
}

export { CreateTodoButton }
