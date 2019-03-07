var exports = module.exports = {},
    utilsFunction = require('../utils/functions'),
   createTransaction  = require("../models/transaction"),
    userModel = require("../models/user");



exports.buyStocks = async (symbol,quantity, userId) => {
    try {
        let model =await userModel.findById(userId)
        console.log(model);
        let stockPrice = await utilsFunction.getStockPrice(symbol);
        let totalStockPrice = stockPrice*quantity;
             if(totalStockPrice <= model.balance){
                 let  transaction = await createTransaction(r)

             }
        console.log(totalStockPrice)

    }catch (e) {

    }
};