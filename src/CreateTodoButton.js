import react from 'react'
import './CreateTodoButton.css'

function CreateTodoButton(props){
    return(
        <button className="CreateTodoButton">
            <ion-icon name="add-circle"></ion-icon>
        </button>
    )
}

export { CreateTodoButton }
