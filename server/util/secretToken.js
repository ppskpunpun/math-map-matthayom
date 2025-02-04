import jwt from "jsonwebtoken"

function createSecretToken(id) {
    return jwt.sign({ id }, process.env.TOKEN_KEY, {
        expiresIn: "30d",
    })
}

export { createSecretToken }