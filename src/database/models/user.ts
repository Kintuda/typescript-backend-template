import mongoose, { Schema, Document } from 'mongoose'
import bcrypt from 'bcryptjs'

interface Iuser extends Document {
    firstName: string
    lastName: string
    email: string
    password: string
    lastToken: string
    phone: string
    adress: string
    cep: string
    role: string
}

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
    adress: {
        type: String,
        required: [true, 'Endereço é um campo obrigatório']
    },
    cep: {
        type: String,
        required: [true, 'CEP é um campo obrigatório']
    },
    role: {
        type: String,
        enum: {
            values: ['owner', 'player']
        }
    }
}, { timestamps: true })

userSchema.pre<Iuser>('save', function (next) {
    if (this.isNew || this.isModified('password')) {
        this.password = bcrypt.hashSync(this.password, 10)
    }
    next()
})



export default mongoose.model<Iuser>('User', userSchema)