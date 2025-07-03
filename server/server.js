// load .env file
import dotenv from 'dotenv'
dotenv.config()

import express from "express"
import cors from "cors"
import cookieParser from 'cookie-parser'
import connectDB from "./db/connection.js"

// routes
import authRoute from './routes/auth.js'
import practiceQuestionRoute from './routes/practiceQuestion.js'

// connect to MongoDB
connectDB()

const PORT = process.env.PORT || 5050
const app = express()

app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST'],
    credentials: true,
}))
app.use(express.json())
app.use(cookieParser())

app.use('/auth', authRoute)
app.use('/practiceQuestion', practiceQuestionRoute)

app.listen(PORT, () => {
    console.log(`Sever is now listening on port ${PORT}`)
})
