import express from 'express'
import { test } from '../controller/UserController.js';

const Router = express.Router() ;


Router.get('/',test)


export default Router