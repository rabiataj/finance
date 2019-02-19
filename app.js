var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    functions = require('./utils/functions'),
    mongoose = require("mongoose"),
    passport = require("passport"),
    LocalStrategy = require("passport-local");
    //User          = require("./")
    app.set("view engine", "ejs");



app.get("/Quote", function(req, res){
   res.render("Quote.ejs")
});

app.get("/stock-price/:symbol", function(req, res) {
    functions.getStockPrice(req.params.symbol).then((response) => {
        //SUCCESS
        res.send(response)

    })
});



// app.get("/stock-price/:symbol", function(req, res) {
//     functions.getStockPrice(req.params.symbol).then((response) => {
//         //SUCCESS
//         res.send(response)
//
//     })
// });










const port = process.env.PORT || 9000;
app.listen(port);