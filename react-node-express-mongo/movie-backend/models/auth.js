const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
    email: {type:String},
    password : {type:String},
    role: {type:String}

})


// create model 

const Auth = mongoose.model("Auth",authSchema,"Auth")

module.exports = Auth