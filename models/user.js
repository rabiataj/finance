var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    balance: Number,
    transactionId : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Transaction"
        }
});
UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);