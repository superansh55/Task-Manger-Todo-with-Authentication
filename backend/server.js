import "dotenv/config"
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import taskRoutes from './routes/task.js'
import userRoutes from './routes/user.js'


const app = express()
app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
mongoose.connect(process.env.MONG_URI)
.then((result)=>
app.listen(process.env.PORT,()=>{
    console.log('Listening to port',process.env.PORT);
    }))
.catch((error)=>console.log(error))

  
app.use('/api/tasks',taskRoutes)
app.use('/api/user',userRoutes)


