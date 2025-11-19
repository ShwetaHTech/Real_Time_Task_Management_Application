import express from "express";
import { createTask, getTasks, updateTask, deleteTask,getTaskById } from "../controllers/taskController.js";

const router = express.Router();

router.post("/", createTask);
router.get("/", getTasks);
router.get("/:id", getTaskById); // GET by ID 
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
