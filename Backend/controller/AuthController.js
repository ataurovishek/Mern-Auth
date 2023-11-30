import bcrypt from 'bcrypt'
import UserModel from "../Models/UserSchema.js"


export const Signup = async (req, res) => {


    const hashedPassword = await bcrypt.hash(req.body.Password,10)

    try {
        const NewUser = new UserModel({
            username: req.body.username,
            email: req.body.email,
            Password: hashedPassword
        })
        await NewUser.save();
        res.status(200).json({ message: 'user created successfully', data: NewUser })
    } catch (err) {
        res.status(400).json({ message: 'failed to create', data: err })
    }
}