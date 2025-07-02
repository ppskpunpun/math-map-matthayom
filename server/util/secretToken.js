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
    const token = req.cookies.token;
    if (!token) res.status(401).json({ message: 'Token not found' });
    else return token;
}

export { createSecretToken, verifyToken, getToken }
