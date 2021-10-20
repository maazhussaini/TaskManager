const Task = require('../models/tasks')

const getAllTasks = async(req, res) => {
    try{
        const task = await Task.find({})
        res.status(200).json({tasks: task})
    }
    catch (error){
        res.status(500).json({msg: error})
    }
}

const createTask = async(req, res) => {
    try
    {   
        const task = await Task.create(req.body)
        res.status(200).json(task)
    }
    catch(error){
        res.status(500).json({"message": error.message})
    }
}

const getTask = async(req, res) => {
    try
    {
        const {id:taskID} = req.params
        const task = await Task.findOne({_id: taskID})

        if(!task) {
            return res.status(404).json({msg:`No task found with id ${taskID}`})
        }
        res.status(200).json({task})
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}

const updateTask = async(req, res) => {
    try
    {
        const {id:taskID} = req.params
        const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
            new:true,
            runValidators: true,
        })

        if(!task) {
            return res.status(404).json({msg:`No task found with id ${taskID}`})
        }
        res.status(500).json({msg:`Successfully updated with id ${taskID}`})
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}

const deleteTask = async(req, res) => {
    try
    {
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id: taskID})

        if(!task) {
            return res.status(404).json({msg:`No task found with id ${taskID}`})
        }
        res.status(200).json({message:'Successfully delete task'})
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}

module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask
}