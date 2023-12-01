import express from 'express'
import {Signin, Signup} from '../controller/AuthController.js'

const Router = express.Router() ;

Router.post('/signup',Signup)
Router.post('/signin',Signin)


export default Router