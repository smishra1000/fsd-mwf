import { useState, useEffect } from "react"
function Movie() {

    const [movies, setMovies] = useState([]);

    const getAllMovies = async () => {
        let res = await fetch("http://localhost:7000/movies");
        let movies = await res.json();
        setMovies(movies)
    }

    useEffect(() => {
        getAllMovies();
    }, [])

    return (
        <div className="container">
            <div className="row">
                {movies.map((movie) => {
                    return (
                        <div className="col-md-3" style={{height:'400px'}}>
                            <div className="card" style={{height:'100%'}}>
                                <img className="card-img-top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICA0LjVLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00387901-klhmladelq-portrait.jpg" alt="Card image cap" height={'200px'}/>
                                <div className="card-body">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <p className="card-text">{movie.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
            <h4>Total counts: {movies.length}</h4>
        </div>
    )

}

export default Movie