const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    mongoose = require('mongoose'),
    passport = require("passport/lib")
    cors = require('cors');
    localStrategy = require("passport-local/lib"),
    app.use(bodyParser.json({limit:"30mb",extended:true}))
    app.use(cors());
    app.use(bodyParser.urlencoded({extended:false,limit:true})),
    Recepie = require("./models/recepie");


mongoose.connect("mongodb://localhost/food_blogging");

app.get('/', (req, res) => {
    Recepie.find({})
    .then((result) => {
        res.send(result);
    });
});

app.post('/recepie', (req, res) => {
    console.log(req.body);
    const newRecepie = req.body;
    Recepie.create(newRecepie)
    .then((result) => {
        console.log(result);
        res.send({message: "Success"});
    });
});



app.listen(4000, () => {
    console.log('server running in ', 4000);
});