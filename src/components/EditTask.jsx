import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editTask } from '../features/taskSlice'

const EditTask = ({task}) => {
    const [isEdit, setIsEditing] = useState(false)
    const [title, setTitle] = useState(task.title)
    const [description, setDescription] = useState(task.description)
    const [status, setStatus] = useState(task.status)
    const dispatch = useDispatch()

    const handleEdit = () => {
        dispatch(editTask({id: task.id, title, description, status}))
        setIsEditing(false)
    }

  return (
      
    <div>
        {isEdit ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className='bg-white p-4 border rounded-md shadow-lg max-w-md w-full'>
                <h2 className='text-lg text-indigo-700'>Edit Task</h2>
                <div className='my-2'> 
                    <input
                    type='text'
                    placeholder='Task Name'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='py-2 shadow- w-full px-3 border rounded-md focus:outline-none focus:ring-1'
                    />
                </div>
                <div className='my-2'>
                    <textarea
                    placeholder='Task Description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className='w-full py-2 px-3 border rounded-md focus:outline-none focus:ring-1'
                    rows="3"
                    >
                    </textarea>
                </div>
                <div className='my-2'>
                    <select 
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className='w-full py-2 px-3 border rounded-md focus:outline-none focus:ring-1'
                    >
                        <option value="To Do">To Do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
                <div className='flex justify-between'>
                    <button 
                    type='submit'
                    className='px-2 bg-indigo-700 text-white py-2 rounded-sm hover:bg-indigo-700'
                    onClick={handleEdit}
                    >
                        Save Task
                    </button>
                    <button className='px-2 bg-gray-700 text-white py-2 rounded-md' onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
            </div>
        </div>
        ) : (
        <div>      
        <button className='px-3 py-1 bg-indigo-700 text-white rounded-md hover:bg-indigo-500'
        onClick={() => setIsEditing(true)}
        >Edit</button>
        </div>
        )}
        
   </div>
  )
}

export default EditTask