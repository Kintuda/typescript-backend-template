import 'dotenv/config'
import App from './app'
import Log from './libs/logger'
import connection from './database/connection'
import CONFIG from './config/api'

process.on('uncaughtException', (error: Error) => {
    Log.error(`UncaughtException event: ${error && error.message}`, {
        stack: error.stack
    })
    process.exit(1)
})

process.on('unhandledRejection', (reason, promise: Promise<any>) => {
    Log.warn(`unhandledRejection event: ${JSON.stringify(reason)}`)
})

connection()
    .then((con) => {
        App.listen(CONFIG.api.port)
        Log.info(`Server started on port: ${CONFIG.api.port}, ENV: ${CONFIG.api.env}`)
    })
    .catch((error) => {
        Log.error(`Error while connecting database, ${error && error.message}`)
        process.exit(1)
    })
