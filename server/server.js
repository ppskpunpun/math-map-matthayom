import express from "express"
import cors from "cors"
import cookieParser from 'cookie-parser'
import connectDB from "./db/connection.js"
import dotenv from 'dotenv'

// routes
import authRoute from './routes/auth.js'

// load .env file
dotenv.config()

// Connect to MongoDB
connectDB()

const PORT = process.env.PORT || 5050
const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())

app.use('/auth', authRoute)

app.listen(PORT, () => {
    console.log(`Sever is now listening on port ${PORT}`)
})