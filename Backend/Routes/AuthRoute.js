import express from 'express'
import {Signin, Signup, google} from '../controller/AuthController.js'

const Router = express.Router() ;

Router.post('/signup',Signup)
Router.post('/signin',Signin)
Router.post('/google',google)


export default Router