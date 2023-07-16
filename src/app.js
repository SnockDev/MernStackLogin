import express from "express";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import taskRoutes from "./routes/task.route.js"

const app=express()

app.use(cookieParser())
app.use(express.json())
app.use('/api',authRoutes)
app.use('/api',taskRoutes)

export default app

