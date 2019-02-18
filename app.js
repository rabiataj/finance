var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    functions = require('./utils/functions'),
    mongoose = require("mongoose");





app.get("/stock-price/:symbol", function(req, res) {
    functions.getStockPrice(req.params.symbol).then((response) => {
        //SUCCESS
        res.send(response)

    })
});










const port = process.env.PORT || 9000;
app.listen(port);