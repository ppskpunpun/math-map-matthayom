import mongoose from 'mongoose'

const URI = process.env.ATLAS_URI || ""

async function connectDB() {
    try {
        await mongoose.connect(URI)
        console.log("Successfully, connected to MongoDB!")
    } catch (err) {
        console.log(err)
        process.exit(1);
    }
}

export default connectDB;