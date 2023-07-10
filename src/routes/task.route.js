import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.js";
import { getTask,getTasks,createTask,updateTask,deleteTask } from "../controller/task.controller.js";

const router=Router()

router.post('/tasks',validateToken,createTask)
router.get('/tasks',validateToken,getTasks)
router.get('/tasks/:id',validateToken,getTask)
router.put('/tasks/:id',validateToken,updateTask)
router.delete('/tasks/:id',validateToken,deleteTask)


export default router