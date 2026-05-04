import express from "express";
import {
  createTask,
  deleteTask,
  getSingleTask,
  getTasks,
  updateTask,
} from "../controller/taskController.js";
import requireAuth from "../middleware/requireAuth.js";
const router = express.Router();
//auth routes
router.use(requireAuth)
//task routes
router.get("/", getTasks);
router.get("/:id", getSingleTask);
router.post("/", createTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
