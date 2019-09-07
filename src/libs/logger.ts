import pino, { Logger } from 'pino'
const { NODE_ENV } = process.env

const createLogger = ():Logger => {
    if(NODE_ENV !== 'production' || !NODE_ENV){
        return pino({prettyPrint: true})
    }
    return pino()
}

export default createLogger()