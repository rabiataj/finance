var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    functions = require('./utils/functions'),
    mongoose = require("mongoose"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    request   = require("request");
    //User          = require("./")
    app.set("view engine", "ejs");



app.get("/Quote", function(req, res){
    request("http://dev.markitondemand.com/Api/v2/Quote",)
   res.render("Quote.ejs");
   //  res.send("landing page");
});

// app.get("/stock-price/:symbol", function(req, res) {
//     functions.getStockPrice(req.params.symbol).then((response) => {
//         //SUCCESS
//         res.send(response)
//
//     })
// });
//


// app.get("/stock-price/:symbol", function(req, res) {
//     functions.getStockPrice(req.params.symbol).then((response) => {
//         //SUCCESS
//         res.send(response)
//
//     })
// });










const port = process.env.PORT || 9000;
app.listen(port);