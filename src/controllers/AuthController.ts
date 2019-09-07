import { Request, Response } from 'express'
import User from '../database/models/user'
import log from '../libs/logger'

export default class AuthController{
    static login = async(req: Request, res: Response) => {
        try {
            const { email, password } = req.body
            if(!email || password){
                return res.status(400).send({
                    errorMessage: 'E-mail e senha são campos obrigatórios.'
                })
            }
            return res.send(200)
        } catch (error) {
            log.error(`Error while login, ${error && error.message}`)
            return res.status(500).send({
                errorMessage: 'Erro interno'
            })
        }
    }

    static register = async(req: Request, res: Response) => {
        const { body } = req
        const consulta = await User.create({...body})
        console.log(consulta);
    }
}