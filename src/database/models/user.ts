import mongoose, { Schema, Document } from 'mongoose'
import bcrypt from 'bcryptjs'

export interface Iuser extends Document {
    firstName: string
    lastName: string
    email: string
    password: string
    lastToken: string
    phone: string
    adress: string
    role: string
    cep: string
    state: string
    city: string
    neighborhood: string
    adressNumber: string
    street: string
    location: Ilocation
}

export interface Ilocation extends Document {
    type: string
    coordinates: Array<number>
}

const locationSchema: Schema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
}, { _id: false })

export const location = mongoose.model<Ilocation>('Location', locationSchema)

const userSchema: Schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Nome é um campo obrigatório']
    },
    lastName: {
        type: String,
        required: [true, 'Sobrenome é um campo obrigatório']
    },
    email: {
        type: String,
        required: [true, 'E-mail é um campo obrigatório'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Senha é um campo obrigatório']
    },
    lastToken: {
        type: String
    },
    phone: {
        type: String,
        required: [true, 'Telefone é um campo obrigatório']
    },
    cep: {
        type: String,
        required: [true, 'CEP é um campo obrigatório'],
        maxlength: [8, 'CEP em formato inválido']
    },
    state: {
        type: String
    },
    city: {
        type: String
    },
    neighborhood: {
        type: String
    },
    adressNumber: {
        type: String
    },
    street: {
        type: String
    },
    location: {
        type: locationSchema
    },
    role: {
        type: String,
        enum: {
            values: ['owner', 'user']
        },
        required: [true, 'Tipo de usuário deve ser informado']
    }
}, { timestamps: true })

userSchema.pre<Iuser>('save', function (next) {
    if (this.isNew || this.isModified('password')) {
        this.password = bcrypt.hashSync(this.password, 10)
    }
    next()
})

export default mongoose.model<Iuser>('User', userSchema)
