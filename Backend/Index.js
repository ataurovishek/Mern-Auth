import express from 'express'
import dotenv from 'dotenv'; dotenv.config()
import mongoose from 'mongoose'
import UserRoute from './Routes/UserRoute.js';
import AuthRoute from './Routes/AuthRoute.js'
const app = express()
app.use(express.json())



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
mongoose.connection.on('disconnected', function () {
    logger.log('mongo db connection closed');
})
// databases connetion ends herer 


// api routing starts here 

app.use('/api/user',UserRoute)
app.use('/api/auth',AuthRoute)





// api routing ends here 


const Port = process.env.PORT || 3000
app.listen(Port, () => {
    DBconnect()
    console.log('Listenin on port' + Port)
})