import dotenv from 'dotenv'
dotenv.config()
const { JWT_SECRET, NODE_ENV, PORT, HERE_ID, HERE_CODE } = process.env

export default {
    api: {
        env: NODE_ENV,
        port: PORT
    },
    auth: {
        secret: JWT_SECRET || ''
    }
}
