import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
    loading: false,
    error: null,
    status: 'All'
}

export const fetchTodo = createAsyncThunk("tasks/fetchTodo", async () => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks && storedTasks.length > 0) {
        return storedTasks;
    }
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    const data = await response.json()
    const tasks = data.map(task => (
        {
            id: task.id,
            title: task.title,
            description:'',
            status: task.completed ? "completed" : "To Do"
        }
    ))
    localStorage.setItem('tasks', JSON.stringify(tasks));
    return tasks;
})

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
    addTask: (state, action ) => {
       state.tasks.push(action.payload)
       localStorage.setItem('tasks', JSON.stringify(state.tasks));
   },
   editTask: (state, action) => {
    state.tasks = state.tasks.map(task => 
        task.id === action.payload.id ? action.payload : task
    )
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
   },
   deleteTask: (state, action) => {
    state.tasks = state.tasks.filter(task => task.id !== action.payload)
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
   }
    },

    extraReducers: (builder) => {
      builder.addCase(fetchTodo.pending, (state) => {
        state.loading = true,
        state.error = null
      })
        .addCase(fetchTodo.fulfilled, (state, action) => {
        state.loading = false,
        state.tasks = action.payload
      })
        .addCase(fetchTodo.rejected, (state, action) => {
        state.loading = false,
        state.error = action.error.message
      })
    }
})
export const {addTask, editTask, deleteTask} = taskSlice.actions
export default taskSlice.reducer
