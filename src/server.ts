import App from './app'
import dotenv from 'dotenv'
import Log from './libs/logger'

dotenv.config()

const { NODE_ENV, PORT } = process.env

process.on('uncaughtException', (error: Error) => {
    Log.error(`UncaughtException event: ${error && error.message}`, {
        stack: error.stack
    })
    process.exit(1)
})

process.on('unhandledRejection', (reason, promise: Promise<any>) => {
    Log.warn(`unhandledRejection event: ${JSON.stringify(reason)}`)
})

App.listen(3000, (error: any): void => {
    if (error) {
        Log.error(`Error while starting server, ${error && error.message}`)
        throw error
    }
    Log.info(`Server started on PORT: ${3000}, ENV: ${NODE_ENV}`)
    return
})