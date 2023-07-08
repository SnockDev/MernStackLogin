import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.js";

const router=Router()

router.get('/tasks',validateToken,async(req,res)=>res.send('Task'))

export default router