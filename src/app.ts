import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import routes from './routes'
import morgan from 'morgan'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())
app.use('/', routes)
app.use(helmet())
app.use(cors)
app.use(morgan('dev'))

export default app
