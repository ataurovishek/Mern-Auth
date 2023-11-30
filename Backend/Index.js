import express from 'express'
import dotenv from 'dotenv'; dotenv.config()
import mongoose from 'mongoose'
const app = express()



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

const Port = process.env.PORT || 3000
app.listen(Port, () => {
    DBconnect()
    console.log('Listenin on port' + Port)
})