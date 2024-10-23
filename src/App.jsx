import { React } from 'react'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'


function App() {
 

  return (
    <div className='min-h-screen bg-gray-100 p-10'>
       <div className='max-w-2xl mx-auto bg-white shadow-md rounded-md p-6'>
       <h1 className='text-center text-2xl font-bold text-indigo-700'>Task Management System</h1>
        <AddTask/>
       <TaskList/>
       </div>   
    </div>
  )
}

export default App
