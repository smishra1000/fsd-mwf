const express = require("express");

const app = express();
const PORT =5000;

app.use(express.json())

const movies = [
    {id:1,title:"Mechanic Rocky",year:2022,director:"Vishwak Sen",description:"Rakesh, a happy-go-lucky young mechanic, must take on the ruthless land grabber Rankireddy to save his beloved ancestral car garage, uncovering unexpected truths",languages:["English"],genres:["drama","Action","Comedy"]},
    {id:2,title:"The Sabarmati Report",year:2024,director:"Vikrant Massey",description:"Inspired by true events that took place in the `Sabarmati Express` on the morning of 27 Feb 2002.",languages:["Hindi","Telgu","English","Marathi"],genres:["Action","Comedy","Horror","crime"]},
    {id:3,title:"Lucky Baskhar",year:2024,director:"Vikrant Massey",description:"Rakesh, a happy-go-lucky young mechanic, must take on the ruthless land grabber Rankireddy to save his beloved ancestral car garage, uncovering unexpected truths",languages:["Hindi","Telgu","English","Kannada"],genres:["drama","Action","Thriller"]},
    {id:4,title:"Bhool Bhulaiyaa 3",year:2024,director:"Vikrant Massey",description:"Rakesh, a happy-go-lucky young mechanic, must take on the ruthless land grabber Rankireddy to save his beloved ancestral car garage, uncovering unexpected truths",languages:["Hindi","Telgu","English"],genres:["drama","Fantasy","Animation"]}
]

app.get("/movies",(req,res)=>{
    const {genres,languages} = req.query;

    console.log(req.query)
    let filteredMovies = movies
    // if(genres){
    //     const genresData = genres.split("|")

    //     console.log(genresData)
    //     filteredMovies = filteredMovies.filter((movie)=>{
    //         return genresData.some((genre)=>movie.genres.includes(genre))
    //     })
    // }
    // if(languages){
    //     const languagesData = languages.split("|")

    //     console.log(languagesData)
    //     filteredMovies = filteredMovies.filter((movie)=>{
    //         return languagesData.some((language)=>movie.languages.includes(language))
    //     })
    // }
    res.status(200).json(filteredMovies)
})


app.get("/movies/:id",(req,res)=>{
    console.log(req.params.id)
    const movie = movies.find((mov)=>{
        return mov.id===parseInt(req.params.id)
    })

    res.status(200).json(movie)
})

app.post("/movies",(req,res)=>{
    const {title,description,languages,genres,director,year} = req.body

    //title,description,director,year,genres,languages
    const newMovie = {
        id:movies.length+1,
        title,
        description,
        director,
        genres,
        languages,
        year
    }
    movies.push(newMovie);
    res.status(200).json(newMovie)
})

app.delete("/movies/:id",(req,res)=>{
    const movieIndex = movies.findIndex((mov)=>{
        return mov.id===parseInt(req.params.id)
    })
    if(movieIndex===-1){
        res.status(404).json({msg:"movie not found"})
    }
    movies.splice(movieIndex,1)
    res.status(200).send();
})








app.listen(PORT,()=>{
    console.log("server started")
})