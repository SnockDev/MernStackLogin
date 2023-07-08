import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import taskRoutes from "./routes/task.route.js"

const app=express()


app.use(express.json())
app.use(cookieParser())
app.use(morgan('dev'))
app.use('/api',authRoutes)
app.use('/api',taskRoutes)

export default app

