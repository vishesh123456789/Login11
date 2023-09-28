const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path:'./config.env'});
const DB = process.env.DATABASE;


mongoose.connect(DB,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }

)
    .then((x) => {
        console.log("connected to Mongo!");

    })

    .catch((err) => {
        console.log("Error");
    });