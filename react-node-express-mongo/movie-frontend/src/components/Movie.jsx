import { useState, useEffect } from "react"
function Movie() {

    const [movies, setMovies] = useState([]);
    const [languages, setLanguages] = useState(["Hindi", "English", "Telgu","Kannada"])
    const [genres, setGenres] = useState(["Thriller", "Action", "Drama", "Comedy"])
    const [selectedLanguage, setSlecetdLanguage] = useState([])

    const getAllMovies = async () => {
        let res = await fetch("http://localhost:7000/movies");
        let movies = await res.json();
        setMovies(movies)
    }

    useEffect(() => {
        getAllMovies();
    }, [])


    const toggleLanguage = (e, lang) => {
        // first check if language is alredy present in selected array 
        // if yes then deselct it

        //if not then push it
        let updatedLangugaes = [];
        const isPresent = selectedLanguage.includes(lang);
        if (isPresent) {
            updatedLangugaes = selectedLanguage.filter((ele) => {
                return ele !== lang
            })
        } else {
            updatedLangugaes = [...selectedLanguage];
            updatedLangugaes.push(lang)
        }

        setSlecetdLanguage(updatedLangugaes)
        //    console.log(selectedLanguage)
    }

    const searchMovieByLanguages = async ()=>{
        const languages = selectedLanguage.join("|")
        let res = await fetch(`http://localhost:7000/movies/search?languages=${languages}`);
        let movies = await res.json();
        setMovies(movies)
    }

    useEffect(() => {
        console.log(selectedLanguage)
        searchMovieByLanguages()
    }, [selectedLanguage])

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-4">
                    <div className="row mt-4">
                        <h5>Filters</h5>
                        <div className="card">
                            <h5>Languages</h5>
                            <div className="language-box" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '3px' }}>
                                {languages.map((ele) => {
                                    return (
                                        <button type="button" class="btn btn-outline-primary" onClick={(e) => toggleLanguage(e, ele)} style={{ background: selectedLanguage.includes(ele) ? '#0d6efd' : '', color: selectedLanguage.includes(ele) ? 'white' : '#0d6efd' }}>{ele}</button>
                                    )
                                })}

                            </div>

                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="card">
                            <h5>Genres</h5>
                            <div className="language-box" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '3px' }}>
                                {genres.map((ele) => {
                                    return (
                                        <button type="button" class="btn btn-outline-primary">{ele}</button>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <h4>Movies in Hyderabad</h4>
                    <div className="row mt-3">
                        {movies.map((movie) => {
                            return (
                                <div className="col-md-3" style={{ minHeight: '400px' }}>
                                    <div className="card" style={{ height: '100%' }}>
                                        <img className="card-img-top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICA0LjVLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00387901-klhmladelq-portrait.jpg" alt="Card image cap" height={'200px'} />
                                        <div className="card-body">
                                            <h5 className="card-title">{movie.title}</h5>
                                            <p className="card-text">{movie.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
    )

}

export default Movie