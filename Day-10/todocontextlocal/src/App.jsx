import React, { useState } from 'react'
import { TodoProvider } from './context'

function App() {

  const [todos,setTodos] = useState([]);

  const addTodo = (todo)=>{
    setTodos((prev)=>[{id:Date.now(),...todo}, ...prev]);
  }

  const updateTodo = (id,todo)=>{
    
  }

  return (
    <TodoProvider value={{todos,addTodo,deleteTodo,updateTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App