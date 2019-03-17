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
    db_Insert   = require("./db_functions/insert");
    app.set("view engine", "ejs");

//mongoose.connect('mongodb://localhost/test');
mongoose.connect("mongodb://rabiataj:rt123456@ds221645.mlab.com:21645/local_db");


//PASSPORT CONFIGRATION
   app.use(require("express-session")({
    secret : "once again",
    resave : false,
    saveUninitialized : false
}));
app.use(bodyParser.json({extended: true}));
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
    var newUser = new User({ username:req.body.username, email:req.body.email ,balance : 10000});
    User.register(newUser, req.body.password, function( err, user){
        if (err){
            console.log(err);
            return res.render("register");}
        passport.authenticate("local")(req, res, function(){
            res.redirect("/Quote");
        });

    });
    console.log(newUser)
});

//HISTORY ROUTE//
app.post("/transaction", function(req, res){
    var newTransaction = Transaction({symbol: req.body.symbol, quantity: req.body.quantity});

    res.render("History.ejs");
});


//BUY ROUTE//

app.post("/buy", async  function(req, res){
   await db_Insert.buyStocks(req.body.symbol, req.body.quantity, req.body.id);
});

//SELL ROUTE//
app.get("/sell",function(req, res) {
    res.render("sell.ejs")
})


const port = process.env.PORT || 9000;
app.listen(port);