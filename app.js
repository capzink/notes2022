const express = require('express')
require('dotenv').config()
const userRoute = require('./user/user.route')
const connectDB = require('./config/connectdb')

const app = express();
app.use("/", userRoute);

const port = process.env.PORT || 3001





const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        console.log('connected to DB');
        app.listen(port, ()=>{
            console.log('Listening on port', port);
        })
    } catch (error) {
        console.log(error);
        
    }
}
start()