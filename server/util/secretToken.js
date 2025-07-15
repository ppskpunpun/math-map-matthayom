import jwt from "jsonwebtoken"
import User from '../db/model/userModel.js'

// verify jwt token if token is valid return user
async function verifyToken(token) {
    try {
        const payload = jwt.verify(token, process.env.TOKEN_KEY);

        const user = await User.findById(payload.id);

        if (!user) {
            throw new Error('User not found')
        }

        return user
    } catch(err) {
        throw new Error('Invalid token');
    }
}

function createSecretToken(id) {
    return jwt.sign({ id }, process.env.TOKEN_KEY, {
        expiresIn: "30d",
    })
}

export { createSecretToken, verifyToken }
