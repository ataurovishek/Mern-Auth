import bcrypt from 'bcrypt'
import UserModel from "../Models/UserSchema.js"
import { errorHandler } from '../utils/Error.js'
import jwt from 'jsonwebtoken'


export const Signup = async (req, res, next) => {


    const hashedPassword = await bcrypt.hash(req.body.Password, 10)

    try {
        const NewUser = new UserModel({
            username: req.body.username,
            email: req.body.email,
            Password: hashedPassword
        })
        await NewUser.save();
        res.status(200).json({ message: 'user created successfully' })
    } catch (err) {
        next(errorHandler(300, 'something went wrong'))
    }
}



export const Signin = async (req, res, next) => {
    const email = req.body.email

    try {
        const validuser = await UserModel.findOne({ email });

        if (!validuser) {
            return next(errorHandler(404, 'user not found'))
        }

        const validPass = await bcrypt.compare(req.body.Password, validuser.Password)

        if (!validPass) {
            return next(errorHandler(401, 'invalid password'))
        }

        const { Password, ...rest } = validuser._doc
        const token = jwt.sign({
            id: validuser._id
        }, process.env.JWT_TOKEN)

        res.cookie('access_token', token, { maxAge: 9999, httpOnly: true })
            .status(200)
            .json(rest)

    } catch (err) {
        next(err)
    }
}