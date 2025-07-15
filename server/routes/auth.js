import express from 'express'
import bcrypt from 'bcryptjs'
import User from '../db/model/userModel.js'
import { createSecretToken, verifyToken } from '../util/secretToken.js';

const router = express.Router();

// Verify token and return username
router.post('/verify', async (req, res) => {
    try {
        const token = req.body.token
        const user = await verifyToken(token);
        res.status(200).json({ message: user.username, valid: true });
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' });
    }
});

// Return user profile
router.post('/profile', async (req, res) => {
    try {
        const token = req.body.token
        const user = await verifyToken(token);
        res.status(200).json({ ...user._doc, success: true });
    } catch (err) {
        console.log(err);
        res.status(401).json({ message: 'Invalid token' });
    }
});

// Signup: Return token in response
router.post('/signup', async (req, res) => {
    try {
        const { username, password, createdAt, name, birthday } = req.body;
        if (!username || !password || !name || !birthday)
            return res.status(400).json({ message: 'All fields are required' });

        const existingUser = await User.findOne({ username });
        if (existingUser)
            return res.status(400).json({ message: 'User already exists' });

        const user = await User.create({ username, password, createdAt, name, birthday });
        const token = createSecretToken(user._id);

        res.status(201).json({ message: 'User signed in successfully', success: true, token, user });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Login: Return token in response
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password)
            return res.status(400).json({ message: 'All fields are required' });

        const user = await User.findOne({ username });
        if (!user)
            return res.status(400).json({ message: 'User not found' });

        const auth = await bcrypt.compare(password, user.password);
        if (!auth)
            return res.status(400).json({ message: 'Incorrect password' });

        const token = createSecretToken(user._id);

        res.status(200).json({ message: 'User logged in successfully', success: true, token });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;
