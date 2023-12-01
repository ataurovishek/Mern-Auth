import bcrypt from 'bcrypt'
import UserModel from "../Models/UserSchema.js"
import { errorHandler } from '../utils/Error.js'


export const Signup = async (req, res, next) => {


    const hashedPassword = await bcrypt.hash(req.body.Password, 10)

    try {
        const NewUser = new UserModel({
            username: req.body.username,
            email: req.body.email,
            Password: hashedPassword
        })
        await NewUser.save();
        res.status(200).json({ message: 'user created successfully', data: NewUser })
    } catch (err) {
        next(errorHandler(300, 'something went wrong'))
    }
}