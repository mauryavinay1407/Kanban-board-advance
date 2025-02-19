const express = require('express');
const app = express();
const cors = require('cors');
const taskRoutes = require('./routes/task.routes');
const { connectDB } = require('./db/db');
require('dotenv').config();

connectDB();

app.use(express.json());

app.use('/api/tasks',taskRoutes);


module.exports = app;