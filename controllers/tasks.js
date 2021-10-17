const Task = require('../models/tasks')

const getAllTasks = (req, res) => {
    res.send('Get all tasks')
}

const createTask = (req, res) => {
    res.status(200).json(req.body)
}

const getTask = (req, res) => {
    res.send({id:req.params.id})
}

const updateTask = (req, res) => {
    res.send('Task updated')
}

const deleteTask = (req, res) => {
    res.send('Task deleted')
}

module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask
}