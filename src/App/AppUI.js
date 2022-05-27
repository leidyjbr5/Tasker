import React from 'react'
import { TodoContext } from '../todoContext'
import { TodoHeader } from '../components/TodoHeader'
import { TodoCounter } from '../components/TodoCounter'
import { TodoSearch } from '../components/TodoSearch'
import { TodoList } from '../components/TodoList'
import { TodoItem } from '../components/TodoItem'
import { CreateTodoButton } from '../components/CreateTodoButton'
import { Modal } from '../components/modal'
import { TodoForm } from '../components/TodoForm'

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue,
  } = React.useContext(TodoContext)

  return (
    <React.Fragment>
      <TodoHeader>

        <TodoCounter 
        totalTodos={totalTodos}
        completedTodos={completedTodos}
        />

        <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList>
        {error && <p>Algo esta mal</p>}
        {loading && <p>Cargando web ...</p>}
        {!loading && !searchedTodos.length && <p>Escribe tú primer TO-DO</p>}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
      <Modal>
          <TodoForm />
      </Modal>
      )}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />
    </React.Fragment>
  )
}

export { AppUI }
