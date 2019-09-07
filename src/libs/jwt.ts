import jwt from 'jsonwebtoken'

const verifyJWT = (jwtToken: string, secret: string): Object => {
    return jwt.verify(jwtToken, secret)
}

const signPayloadJWT = (payload: Object, secret: string ): string => {
    return jwt.sign(payload, secret, {
        expiresIn: '1d'
    })
} 

export {
    verifyJWT
}