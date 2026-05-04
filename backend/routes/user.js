import express from 'express'
const router=express.Router()
import { loginUser,signupUser } from '../controller/userController.js'
//user routes
router.post('/login',loginUser)
router.post('/signup',signupUser)

export default router