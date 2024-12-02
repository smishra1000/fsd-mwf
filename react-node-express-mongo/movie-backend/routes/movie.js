const express = require("express");
const Movie = require("../models/movie")

const router = express.Router();

router.get("/",async(req,res)=>{
    let movies = await Movie.find({});
    res.send(movies)
})

router.get("/:title",async (req,res)=>{
    let movies = await Movie.find({title:req.params.title})
    res.send(movies)
})

router.post("/",async (req,res)=>{
    const {title,description,languages,genres,director,year} = req.body

    //title,description,director,year,genres,languages
    const newMovie = new Movie({
        title,
        description,
        director,
        genres,
        languages,
        year
    })
    newMovie.save()
    res.send("movie created successfully")
})



module.exports = router