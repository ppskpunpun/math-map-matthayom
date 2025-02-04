import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
const { Schema, model } = mongoose

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

userSchema.pre('save', async function() {
    this.password = await bcrypt.hash(this.password, 10)
})

const User = model('User', userSchema)
export default User