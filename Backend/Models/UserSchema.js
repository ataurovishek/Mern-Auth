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
    profilePicture: {
        type: String,
        default: 'https://www.shutterstock.com/image-vector/default-avatar-profile-icon-vector-260nw-1725655669.jpg'
    }
}, { timestamps: true })

const UserModel = mongoose.model('User', UserSchema)

export default UserModel