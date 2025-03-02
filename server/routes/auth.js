import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../db/model/userModel.js'
import { createSecretToken, verifyToken } from '../util/secretToken.js';

const router = express.Router();

// get the token in cookie 
async function getToken(req, res) {
    const token = req.cookies.token;
    if (!token) res.status(401).json({ message: 'Token not found' });
    else return token;
}

// route for verifying the token
router.post('/verify', async (req, res) => {
    const token = await getToken(req, res);
    try {
        const user = await verifyToken(token);
        res.status(200).json({ message: user.username, valid: true });
    } catch(err) {
        res.status(401).json({ message: 'Invalid token'});
    }
})

// route for getting user data
router.post('/profile', async (req, res) => {
    const token = await getToken(req, res);
    try {
        const user = await verifyToken(token);
        res.status(200).json({...user._doc, success: true});
    } catch(err) {
        res.status(401).json({ message: 'Invalid token'});
    }
})

router.post('/signup', async (req, res) => {
    try {
        // check if client send the appropriate inputs
        const { username, password, createdAt, name, birthday } = req.body 
        if (!username || !password || !name || !birthday) return res.status(400).json({ message: 'All fields are required'})

        // check if username is already exists
        const existingUser = await User.findOne({ username })
        if (existingUser) return res.status(400).json({ message: "User already exists" })

        // create the user in database then generate jwt access token from MongoDB's ObjectId
        const user = await User.create({ username, password, createdAt, name, birthday })
        const token = createSecretToken(user._id)

        // send token back to user in cookie
        res.cookie('token', token, {
            httpOnly: false,
        })

        res.status(201).json({ message: "User signed in successfully", success: true, user })

    } catch(err) {
        res.status(500).json({ message: "Internal server error"})
    }
})

router.post('/login', async (req, res) => {
    try {
        // check if client send the appropriate inputs
        const { username, password } = req.body
        if (!username || !password) return res.status(400).json({ message: 'All fields are required'})
            
        // check if user is in the database 
        const user = await User.findOne({ username })
        if (!user) return res.status(400).json({ message: 'User not found' })
       
        // check if the password is correct by comparing hashed
        const auth = await bcrypt.compare(password, user.password)
        if (!auth) return res.status(400).json({ message: 'Inccorect password' })
        
        // send token back to user in cookie
        const token = createSecretToken(user._id)
        res.cookie('token', token, {
            httpOnly: false,
        })

        res.status(200).json({ message: 'User logged in successfully', success: true })
        
    } catch(err) {
        res.status(500).json({ message: "Internal server error"})
    }
})

export default router