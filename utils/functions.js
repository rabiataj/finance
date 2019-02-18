var exports = module.exports = {},
    constants = require("./constants"),
    axios = require('axios');



exports.getStockPrice = async (symbol) => {
    let response = await axios.get(`https://www.alphavantage.co/query?symbol=${constants.symbolType[symbol]}&apikey=${constants.APIKEY}`);
    console.log(response)
    return response.data;


};