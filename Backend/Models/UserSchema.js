import mongoose from 'mongoose'


const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
}, { timestamps: true })

const UserModel = mongoose.model('User', UserSchema)

export default UserModel