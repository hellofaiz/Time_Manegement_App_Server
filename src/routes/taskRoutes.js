const express = require('express');
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/taskController');
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', verifyToken, createTask);
router.get('/:userId', verifyToken, getTasks);
router.put('/:taskId', verifyToken, updateTask);
router.delete('/:taskId', verifyToken, deleteTask);

module.exports = router;
