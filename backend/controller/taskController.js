import Task from '../model/TaskModel.js'
import mongoose from 'mongoose'


const getTasks= async (req,res)=>{

    const tasks=await Task.find({}).sort({createdAt:-1})

   return res.status(200).json({tasks})
}

const getSingleTask=(req,res)=>{
    const id = req.params.id
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:'No such Workout'})
    }
   return res.status(200).json({success:'Retrieved Single Task'})
}

const deleteTask=(req,res)=>{
   return res.status(200).json({success:'Deleted a Task'})
}

const createTask=async (req,res)=>{

    const {title,description,date}=req.body
    let emptyFields=[]

    if(!title){
        emptyFields.push("title")
    }
    if(!date){
        emptyFields.push("date")
    }
    if(emptyFields.length > 0){
        return res
        .status(400)
        .json({error:'Please fill in all required fields',emptyFields})
    }
    try{
        const task=await Task.create({title,date,description})
        res.status(200).json(task)
    }catch(error){
        res.status(400).json({error:error.message})
    }

}

const updateTask=(req,res)=>{
   return res.status(200).json({success:'Updated a Task'})
}


export {getTasks,getSingleTask,deleteTask,updateTask,createTask}