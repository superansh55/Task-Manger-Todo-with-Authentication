import "dotenv/config"
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import taskRoutes from './routes/task.js'


const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect(process.env.MONG_URI)
.then((result)=>
app.listen(process.env.PORT,()=>{
    console.log('Listening to port',process.env.PORT);
    }))
.catch((error)=>console.log(error))

  
app.use('/api/tasks',taskRoutes)

