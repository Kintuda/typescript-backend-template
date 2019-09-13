import { Request, Response, NextFunction } from 'express'
import { BadRequestError, Unathorize, Forbidden, NotFound, mongooseError } from '../types/Errors'
import mongoose from 'mongoose'
import Log from '../libs/logger'

export default class ErrorHandler {
    static notFoundRoute = (req: Request, res: Response) => {
        return res.status(404).send({
            errorMessage: 'Rota não encontrada',
            errors: []
        })
    }

    static errorRouter = (err: any, req: Request, res: Response, next: NextFunction) => {
        switch (err.constructor) {
            case mongoose.Error:
                if (err.name === 'ValidationError') {
                    const errorObject: mongooseError = {
                        errorMessage: 'Erro de validação',
                        errors: Object.keys(err.errors).map((error) => {
                            return {
                                field: error,
                                message: err.errors[error].message
                            }
                        })
                    }
                    return res.status(400).send(errorObject)
                }
                return res.status(500).send({ errorMessage: 'Erro interno', errors: [] })
            case BadRequestError:
            case Unathorize:
            case Forbidden:
            case NotFound:
                return res.status(err.status).send({ errorMessage: err.description, errors: err.errors })
            default:
                Log.error(`Internal server error: ${err && err.message}`)
                return res.status(err.status || 500).send({ errorMessage: 'Erro Interno', errors: [] })
        }
    }
}
