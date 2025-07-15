import jwt from "jsonwebtoken"
import User from '../db/model/userModel.js'

// verify jwt token if token is valid return user
async function verifyToken(token) {
    try {
        const data = jwt.verify(token, process.env.TOKEN_KEY);
        const user = await User.findById(data.id);
        if (user) return user;
        else throw new Error('Invalid token')
    } catch(err) {
        console.log(err)
        throw new Error('Invalid token');
    }
}

function createSecretToken(id) {
    return jwt.sign({ id }, process.env.TOKEN_KEY, {
        expiresIn: "30d",
    })
}

// get the token in cookie
async function getToken(req, res) {
    try {
        const token = req.cookies.token;
        if (!token) {
            res.status(401).json({ message: 'Token not found' })
        } else {
            return token
        }
    } catch(err) {
        console.log('Can not extract the token')
        console.log(err)
        res.status(500).json({ message: 'Can not extract the token' })
    }
}

export { createSecretToken, verifyToken, getToken }
