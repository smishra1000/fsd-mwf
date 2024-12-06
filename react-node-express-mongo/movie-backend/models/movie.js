const mongoose = require("mongoose");


// create schema 

const movieSchema = new mongoose.Schema({
    title: {type:String},
    description:{type:String},
    year:{type:Number},
    director:{type:String},
    genres:{type:Array},
    languages:{type:Array},
    releaseDate:{type:String},
    format:{type: Array},
    cast:{type:Array},
    duration:{type:String},
    crew: {
        director:{type:String},
        writer:{type:String},
        producers:{type:Array}

    }
})



// create model 

const Movie = mongoose.model("Movie",movieSchema,"Movie")

module.exports = Movie