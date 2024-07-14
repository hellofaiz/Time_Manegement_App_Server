const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createTask = async (req, res) => {
    const { title, description, status } = req.body;
    const userId = req.user.uid;

    try {
        const task = await prisma.task.create({
            data: {
                title,
                description,
                status,
                userId
            }
        });
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create task' });
    }
};

const getTasks = async (req, res) => {
    const userId = req.params.userId;

    try {
        const tasks = await prisma.task.findMany({
            where: { userId }
        });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
};

const updateTask = async (req, res) => {
    const { taskId } = req.params;
    const { title, description, status } = req.body;

    try {
        const task = await prisma.task.update({
            where: { id: taskId },
            data: { title, description, status }
        });
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update task' });
    }
};

const deleteTask = async (req, res) => {
    const { taskId } = req.params;

    try {
        await prisma.task.delete({
            where: { id: taskId }
        });
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete task' });
    }
};

module.exports = {
    createTask,
    getTasks,
    updateTask,
    deleteTask
};
