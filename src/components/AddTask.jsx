import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {v4 as uuiv4 } from 'uuid'
import { addTask } from '../features/taskSlice'

const AddTask = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('To Do')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTask = {
            id: uuiv4(),
            title,
            description,
            status
        }
        dispatch(addTask(newTask))
        setTitle('')
        setDescription('')
        setStatus('To Do')
    }

  return (
    <form className='my-2' onSubmit={handleSubmit}>
        <h2 className='text-lg text-indigo-700 mb-2'>Add New Task</h2>
        <div className='mb-2'> 
            <input
            type='text'
            placeholder='Task Name'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='py-2 shadow- w-full px-3 border rounded-md focus:outline-none focus:ring-1'
            />
        </div>
        <div className='mb-1'>
            <textarea
            placeholder='Task Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='w-full py-2 px-3 border rounded-md focus:outline-none focus:ring-1'
            rows="3"
            >
            </textarea>
        </div>
        <div className='mb-2'>
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
        <button 
        type='submit'
        className='w-full bg-indigo-700 text-white py-2 rounded-sm hover:bg-indigo-700'
        >
            Add Task
        </button>
    </form>
  )
}

export default AddTask