import express from "express";
import dotenv from "dotenv";
dotenv.config()
import connectDB from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";


const app=express()
app.use(cors({
    origin: process.env.CLIENT_URL || "https://virtual-assistant-tijz.onrender.com",
    credentials:true,
}))
const port=process.env.PORT || 5000
app.use(express.json())
app.use(cookieParser())



app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)



const startServer = async () => {
    try {
        await connectDB()
        app.listen(port, () => {
            console.log(`server started on port ${port}`)
        })
    } catch (error) {
        console.error("Failed to connect to DB, server not started:", error.message)
        process.exit(1)
    }
}

startServer()
