import react from 'react'
import './TodoItem.css'

function TodoItem(props){

  const onComplete = () => {
    alert('¡Tarea ' + props.text + ' completada!' )
  }

  const onDelete = () => {
    alert('Eliminaste la tarea ' + props.text )
  }

  return(
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={onComplete}
      >
        <ion-icon name="checkmark-circle-outline"></ion-icon>
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
      {props.text}
      </p>
      <span className="Icon Icon-delete"
        onClick={onDelete}
      >
        <ion-icon name="trash-outline"></ion-icon>
      </span>
    </li>
  )
}

export { TodoItem }
