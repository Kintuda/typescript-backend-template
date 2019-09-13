import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import routes from './routes'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import middleware from './middlewares/errorHandler'

class App{
    public app: express.Application
    constructor(){
        this.app = express()
        this.setConfig()
    }

    private setConfig(){
        this.app.use(bodyParser.json())
        this.app.use('/', routes)
        this.app.use('/*', middleware.notFoundRoute)
        this.app.use(middleware.errorRouter)
        this.app.use(helmet())
        this.app.use(cors)
        this.app.use(morgan('dev'))
    }
}

export default new App().app
