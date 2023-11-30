import express from 'express'
import { test } from '../controller/UserController.js';

const Router = express.Router() ;


export default Router.get('/',test)