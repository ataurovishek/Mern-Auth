import express from 'express'
import {Signup} from '../controller/AuthController.js'

const Router = express.Router() ;

Router.post('/signup',Signup)


export default Router