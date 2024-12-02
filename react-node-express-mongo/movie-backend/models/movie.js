const mongoose = require("mongoose");


// create schema 

const movieSchema = new mongoose.Schema({
    title: {type:String},
    description:{type:String},
    year:{type:Number},
    director:{type:String},
    genres:{type:Array},
    languages:{type:Array}
})



// create model 

const Movie = mongoose.model("Movie",movieSchema,"Movie")

module.exports = Movie