const express = require('express')
require('dotenv').config()
const app = express();
const connectDB = require('./config/connectdb')

const port = process.env.PORT || 3001
app.use(express.json())

//routes
const userRoute = require('./user/user.route')
const noteRoute = require("./notes/notes.routes");
app.use("/user", userRoute)
app.use("/notes", noteRoute);




const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        console.log('connected to DB');
        app.listen(port, ()=>{
            console.log('Listening on port', +port);
        })
    } catch (error) {
        console.log(error);
        
    }
}
start()