import './App.css'
import React from 'react'
import { useTodos } from './useTodos'
import { TodoHeader } from '../components/TodoHeader'
import { TodoCounter } from '../components/TodoCounter'
import { TodoSearch } from '../components/TodoSearch'
import { TodoList } from '../components/TodoList'
import { TodoItem } from '../components/TodoItem'
import { CreateTodoButton } from '../components/CreateTodoButton'
import { Modal } from '../components/modal'
import { TodoForm } from '../components/TodoForm'
import { EmptyTodos } from '../components/EmptyTodos'
import { TodosError } from '../components/TodosError'
import { TodosLoading } from '../components/TodosLoading'
import { ChangeAlert } from '../components/ChangeAlert'

function App() {

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
    addTodo,
    sincronizeTodos,
  } = useTodos()

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>

        <TodoCounter 
        totalTodos={totalTodos}
        completedTodos={completedTodos}
        />

        <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList 
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        totalTodos={totalTodos}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={
          (searchText) => <p> No hay resultado para {searchText} </p>}
        render={todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}

        >

        {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
        
      </TodoList>

      {!!openModal && (
      <Modal>
          <TodoForm 
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
      </Modal>
      )}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />

      <ChangeAlert
       sincronize={sincronizeTodos}
      />
    </React.Fragment>
  )
}

export default App
