const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')

// import routes
const pointRoute = require('./Routes/point');

//routes
app.get('/', (req, res) => {
    res.send('home');
});

//connect to db
mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true}, () => console.log('connected'));

//mute up server
app.listen(3000);