const { taskModel } = require("../models/task.model");

const getTask = async(req,res)=>{
    try {
        const filter = req.query.filter || "";
        const tasks = await taskModel.find({
            title:{
                $regex : filter,
                $options : "i"
            }
        })
        return res.status(200).json({success:true,tasks});
    } catch (error) {
        console.error("error searching tasks", error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

const createTask = async(req,res)=>{
    const {title,description,status} = req.body;
    try {
        const Task = await taskModel.create({
            title,
            description,
            status
        })
        res.status(201).json(Task);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}


const editTask = async(req,res)=>{
    const taskId = req.params.id;
    const {title,description,status} = req.body;
    try {
        await taskModel.findByIdAndUpdate(taskId,{
            title,
            description,
            status
        });
        res.status(200).json({ message: 'Task updated successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}
const deleteTask = async(req,res)=>{
    const taskId = req.params.id;
    try {
        await taskModel.findByIdAndDelete(taskId);
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

const moveTask = async(req,res)=>{
    const taskId = req.params.id;
    const {toColumn} = req.body;

    try {
        await taskModel.findByIdAndUpdate(taskId,{
            status: toColumn
        });
        return res.status(201).json({message:"moved successfully"});
    } catch (error) {
        res.status(400).json({ error: err.message });
    }
}


module.exports = {getTask,createTask,editTask,deleteTask,moveTask};