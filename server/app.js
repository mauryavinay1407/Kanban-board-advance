const express = require('express');
const app = express();
const cors = require('cors');
const taskRoutes = require('./routes/task.routes');
const { connectDB } = require('./db/db');
require('dotenv').config();

const corsOptions = {
    origin: ["https://kanban-board-advance-v2.onrender.com", "http://localhost:5173"],
    credentials: true,
  };
  
connectDB();

app.use(cors(corsOptions))
app.use(express.json());
app.use('/api/tasks',taskRoutes);


module.exports = app;