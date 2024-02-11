import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import RemoveTodo from './components/RemoveTodo'


function App() {
  const [count, setCount] = useState(0)

  return (
   
      <div>
        <h1>Learn about readux toolkit</h1>
        <AddTodo/>
        <RemoveTodo/>
      </div>
   
  )
}

export default App
