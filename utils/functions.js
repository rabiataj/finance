var exports = module.exports = {},
    constants = require("./constants"),
    axios =  require('axios');



exports.getStockPrice = async (symbol) => {
    let response = await axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${constants.APIKEY}`);
    console.log(response.data)
    return response.data["Global Quote"]["05. price"];
};