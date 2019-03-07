var mongoose = require("mongoose");

// SCHEMA SETUP
var transactionSchema = new mongoose.Schema({
    symbol: String,
    date: String,
    price: Number,
    isBuy: Boolean,
    quantity: Number
});

//MODEL
module.exports = mongoose.model("Transaction", transactionSchema);