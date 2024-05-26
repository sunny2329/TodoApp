import { useState } from 'react'
import AddTask from './components/AddTask'
import TodoContainer from './components/TodoContainer'


function App() {
  

  return (
    <>
      <div>
        <AddTask/>
        <TodoContainer/>
      </div>
    </>
  )
}

export default App
