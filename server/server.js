import express from "express"
import cors from "cors"
import connectDB from "./db/connection.js"

const PORT = process.env.PORT || 5050
const app = express()

app.use(cors())
app.use(express.json())

// Connect to MongoDB
connectDB()

app.listen(PORT, () => {
    console.log(`Sever is now listening on port ${PORT}`)
})