import mongoose from "mongoose";

const {Schema}=mongoose

const taskSchema= new Schema(
    {
        title:{
            type:String,
            required:true
        },
         description:{
            type:String
        },
         date:{
            type:Date,
            required:true
        }
    },{timestamps:true}
)

export default mongoose.model('Task',taskSchema)