# Task Management Application

This is a React-based task management application that allows users to create, edit, and delete tasks. It uses Redux for state management and localStorage for data persistence.

## Features

- Create new tasks
- Edit existing tasks
- Delete tasks
- Filter tasks by status
- Persist tasks in localStorage
- Fetch initial tasks from an API if localStorage is empty

## Technologies Used

- React
- Redux Toolkit
- Tailwind CSS
- localStorage for data persistence

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   
   git clone https://github.com/Amalatv/Task_Management.git
   

2. Navigate to the project directory:
   
   cd task-management
   

3. Install dependencies:
   
   npm install
   
   or
   
   yarn install
   

4. Start the development server:
   
   npm run dev
   
   or
   
   yarn dev
   

5. Open your browser and visit http://localhost:5173 (or the port shown in your terminal).

## Project Structure

- src/
  - components/: React components
  - features/: Redux slices and related logic
  - App.jsx: Main application component
  - main.jsx: Entry point of the application

## Redux Store

The application uses Redux Toolkit for state management. The main slice is taskSlice.jsx, which handles the following actions:

- addTask: Add a new task
- editTask: Edit an existing task
- deleteTask: Remove a task
- fetchTodo: Async thunk to fetch initial tasks

## Data Persistence

Tasks are stored in the browser's localStorage. When the application loads, it first checks localStorage for existing tasks. If none are found, it fetches initial tasks from a mock API.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
