import express from 'express'
import dotenv from 'dotenv'; dotenv.config()
import mongoose from 'mongoose'
import UserRoute from './Routes/UserRoute.js';
import AuthRoute from './Routes/AuthRoute.js';
import cors from 'cors';

const Port = process.env.PORT || 3000


const app = express()
app.use(express.json())

const corsOptions = {
    origin: true,
    credentials: true
}

app.use(cors(corsOptions))



// databases connetion starts herer 

const DBconnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
    } catch (err) {
        console.log('failed' + err)
    }
}
mongoose.connection.on('connecting', () => {
    console.log("trying to establish a connection to mongo")
})
mongoose.connection.on('error', (err) => {
    console.log('connection to mongo failed ' + err);
});

mongoose.connection.on('connected', () => {
    console.log("connection established successfully");
});
mongoose.connection.on('disconnected',()=>{
    console.log('mongo db connection closed');
})
// databases connetion ends herer 


// api routing starts here 

app.use('/api/user', UserRoute)
app.use('/api/auth', AuthRoute)
// api routing ends here 


// middlewares starts here 

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';

    return res.status(statusCode).json({
        Success: false,
        message,
        statusCode,
    })
})





app.listen(Port, () => {
    DBconnect()
    console.log('Listenin on port' + Port)
})