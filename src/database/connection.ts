import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOST, MONGO_DATABASE } = process.env

const getConnection = (): Promise<any> => {
    const MONGO_URI: string = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DATABASE}`
    const defaultConfig = {
        useNewUrlParser: true
    }
    return mongoose.connect(MONGO_URI, defaultConfig)
}

export default getConnection