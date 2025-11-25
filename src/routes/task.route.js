import { Router } from "express"
import { AddTask, AllTask, DeleteTask, UpdateTask } from "../controllers/task.controller.js"


const TaskRoute = Router()

TaskRoute.post("/add", AddTask)
TaskRoute.put("/update/:id", UpdateTask)
TaskRoute.get("/list", AllTask)
TaskRoute.delete("/delete/:id", DeleteTask)


export default TaskRoute