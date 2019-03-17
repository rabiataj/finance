var exports = module.exports = {},
    utilsFunction = require('../utils/functions'),
   createTransaction  = require("../models/transaction"),
    userModel = require("../models/user");



exports.buyStocks = async (symbol,quantity, userId) => {
    try {
        let model =await userModel.find(email)
        console.log(model);
        let stockPrice = await utilsFunction.getStockPrice(symbol);
        let totalStockPrice = stockPrice*quantity;
             if(totalStockPrice <= model.balance){
          await       createTransaction.create({
                     symbol: symbol,
                     date: Date.now(),
                     price: stockPrice,
                     isBuy: true,
                     quantity: quantity
                 });
          let Price = model.balance - totalStockPrice  ;
             console.log("you brought");

             }
else{
    console.log("don't have enough balance");
             }
        console.log(totalStockPrice)

    }catch (e) {

    }
};