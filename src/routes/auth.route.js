import { Router } from "express";
import { register,login,logout,profile } from "../controller/auth.controller.js";
import { validateToken } from "../middlewares/validateToken.js";

const router=Router()

router.post('/register',register)
router.post('/login',login)
router.post('/logout',logout)
router.get('/profile',validateToken,profile)

export default router