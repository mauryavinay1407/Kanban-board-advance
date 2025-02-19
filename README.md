# Kanban Board Advanced (with Backend)

This project is an interactive **Kanban board** application built with **React** and a **backend API**. It allows users to manage tasks efficiently with features such as **drag and drop**, **search**, **dark mode**, and **persistent storage** using a database.

## Features

- **Task Management**: Create, edit, and delete tasks.
- **Drag and Drop**: Move tasks between different columns effortlessly.
- **Search Functionality**: Quickly find tasks by title.
- **Dark Mode**: Toggle between light and dark themes.
- **Responsive Design**: Optimized for different screen sizes.
- **Undo Delete**: Restore a recently deleted task within 5 seconds.
- **Backend API Integration**: Data is stored persistently in a database.

## Tech Stack

### Frontend
- React
- Context API (for state management)
- SCSS (for styling)
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS for secure API calls

## Installation

### Clone the Repository
```sh
git clone https://github.com/mauryavinay1407/Kanban-board-advance.git
```

### Backend Setup
1. Navigate to the backend directory:
   ```sh
   cd Kanban-board-advance/server
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables (`.env` file):
   ```sh
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```
4. Start the backend server:
   ```sh
   npm start
   ```

### Frontend Setup
1. Navigate to the client directory:
   ```sh
   cd Kanban-board-advance/client
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
4. Open your browser and navigate to `http://localhost:5173`.

## API Endpoints

### Tasks
- `GET /api/tasks?filer=?` - Fetch all tasks
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task
- `PUT /api/tasks/move/:id` - Move a task between columns

