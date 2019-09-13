import User, { Iuser } from '../database/models/user'

const requestToDatabase = (body: any): Iuser => {
    return new User({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: body.password,
        lastToken: body.lastToken,
        phone: body.phone,
        role: body.role,
        cep: body.cep,
        adressNumber: body.adressNumber,
        state: body.state,
        city: body.city,
        neighborhood: body.neighborhood,
        street: body.street,
        location: {
            type: 'Point',
            coordinates: []
        }
    })
}

const requestToLogin = (body: any): Object => {
    return {
        login: body.email,
        password: body.password
    }
}

export {
    requestToDatabase,
    requestToLogin
}
