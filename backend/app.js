const dotenv = require('dotenv')
const express = require('express');
const app = express();
const mongoose = require('mongoose')
require('./db/database');


app.get('/', (req, res) => {
    res.send("Hello world from backend");
});


app.listen(3000, () => {
    console.log(`server is running on port 3000`)
})

app.get('/login', (req, res) => {
    res.send("login")
})

app.get('/signup', (req, res) => {
    res.send("signup")
})