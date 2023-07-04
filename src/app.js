import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.route.js";

const app=express()


app.use(express.json())
app.use('/api',authRoutes)
app.use(morgan('dev'))

export default app

