import "dotenv/config"
import express from 'express'
import taskRoutes from './routes/taskRoutes'

const app = express()

app.listen(process.env.PORT,()=>{
    console.log('Listening to port',process.env.PORT);
    
})

app.use('/api/tasks',taskRoutes)

