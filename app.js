var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    functions = require('./utils/functions'),
    mongoose = require("mongoose"),
    User      = require("./models/user"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    request   = require("request"),
    Transaction = require("./models/transaction"),
    Buy         = require("./models/buy"),
    Sell        = require("./models/sell");
    //User          = require("./")
    app.set("view engine", "ejs");

   //PASSPORT CONFIGRATION
   app.use(require("express-session")({
    secret : "once again",
    resave : false,
    saveUninitialized : false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());




app.get("/", function(req, res) {
   res.send("profile"); 
});
app.get("/Quote", function(req, res){
    request("http://dev.markitondemand.com/Api/v2/Quote", )
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

//=============//
//AUTH ROUTE
//============//
app.get("/register", function(req, res){
    res.render("register.ejs");
});

app.post("/register", function(req, res) {
    var newUser = new User({ username:req.body.username});
    User.register(newUser, req.body.password, function( err, user){
        if (err){
            console.log(err);
            return res.render("register");}
        passport.authenticate("local")(req, res, function(){
            res.redirect("/Quote");
        });

    });
});



//HISTORY ROUTE//
app.get("/transaction", function(req, res){
    res.render("History.ejs");
});


//BUY ROUTE//

app.get("/buy",  function(req, res){
   res.render("Buy.ejs");
});

//SELL ROUTE//
app.get("/sell",function(req, res) {
    res.render("sell.ejs")
})


const port = process.env.PORT || 9000;
app.listen(port);