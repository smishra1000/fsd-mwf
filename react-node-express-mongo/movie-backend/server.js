const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const movieRoutes = require("./routes/movie")

const app = express();

app.use(cors())

// req body parser
app.use(express.json())

// connect node express app with mongodb 

mongoose.connect("mongodb://localhost:27017/movie_db");

app.use("/movies",movieRoutes)

app.listen(7000,()=>{
    console.log("server is running at port 7000")
})