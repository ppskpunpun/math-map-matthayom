import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../db/model/userModel.js'
import { createSecretToken } from '../util/secretToken.js';

const router = express.Router();

router.post('/', async (req, res) => {
    const token = req.cookies.token
    if (!token) {
        res.status(401).json({ message: 'Token not found' })
    }

    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
        if (err) {
            return res.status(401).json({ message: 'Token is unverified' })
        } else {
            const user = await User.findById(data.id)
            if (user) return res.status(200).json({ user: user.username })
            else return res.status(400).json({ message: 'Something went wrong with token' })
        }
    })
    
})

router.post('/signup', async (req, res) => {
    try {
        const { username, password, createdAt } = req.body

        const existingUser = await User.findOne({ username })
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" })
        }

        const user = await User.create({ username, password, createdAt })
        const token = createSecretToken(user._id)

        res.cookie('token', token, {
            httpOnly: false,
        })

        res.status(201).json({ message: "User signed in successfully", success: true, user })
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: "Internal server error"})
    }
})

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body
        if (!username || !password) {
            return res.status(400).json({ message: 'All fields are required'})
        }

        const user = await User.findOne({ username })
        if (!user) {
            return res.status(400).json({ message: 'User not found' })
        }
        
        const auth = await bcrypt.compare(password, user.password)
        if (!auth) {
            return res.status(400).json({ message: 'Inccorect password' })
        }

        const token = createSecretToken(user._id)
        res.cookie('token', token, {
            httpOnly: false,
        })

        res.status(200).json({ message: 'User logged in successfully', success: true })
    } catch(err) {
        console.log(err)
        res.status(500).json({ message: "Internal server error"})
    }
})

export default router