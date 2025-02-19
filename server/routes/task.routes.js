const express = require('express');
const { getTask, createTask, editTask, deleteTask, moveTask } = require('../controllers/task.controller');
const router = express.Router();

router.get('/',getTask);
router.post('/',createTask);
router.put('/:id',editTask);
router.put('/move/:id',moveTask);
router.delete('/:id',deleteTask);


module.exports = router;