import express from 'express'
import{
    createTask,
    deleteTask,
    getSingleTask,
    getTasks,
    updateTask
} from '../controller/taskController'

const router=express.Router()

router.get('/',getTasks)
router.get('/:id',getSingleTask)
router.post('/',createTask)
router.delete('/:id',deleteTask)
router.put('/:id',updateTask)

export default router