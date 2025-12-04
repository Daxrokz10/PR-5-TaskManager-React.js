import React from 'react'
import TodoForm from './components/TodoForm';
import TodoView from './components/TodoView';

const App = () => {
  return (
    <div>
      <div className="container">
        <TodoForm />
        <TodoView />
      </div>
    </div>
  )
}

export default App
