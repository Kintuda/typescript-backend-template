import mongoose, { Schema, mongo } from 'mongoose'

const userSchema: Schema = new mongoose.Schema({
    identification: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'E-mail é um campo obrigatório'],
        unique: true
    },
    role: {
        type: String,
        enum: {
            values: ['owner', 'player']
        }
    }
}, { timestamps: true })

export default mongoose.model('User', userSchema)