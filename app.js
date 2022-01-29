const express = require('express')
const userRoute = require('./user/user.route')

const app = express();
app.use("/", userRoute);

const port = process.env.PORT || 3001





const start =()=>{
    app.listen(port, ()=>{
        console.log('Listening on port', port);
    })
}
start()