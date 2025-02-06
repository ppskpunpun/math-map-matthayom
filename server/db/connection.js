import mongoose from 'mongoose'

// connect to MongoDB using URI
async function connectDB() {
    try {
        await mongoose.connect(process.env.ATLAS_URI)
        console.log("Successfully, connected to MongoDB!")
    } catch (err) {
        console.log(err)
        process.exit(1);
    }
}

export default connectDB;