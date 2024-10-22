import { useEffect, useState } from "react"



function MyPhotos() {
    const [photos, setPhotos] = useState([])

    // const [email,setEmial] = useState("test1@gmail.com")

    // first version of 
    useEffect(() => {
        getPhotosFromApi();
    },[])

    const getPhotosFromApi = async () => {
        let photos = await fetch("https://jsonplaceholder.typicode.com/photos")
        let data = await photos.json();
        setPhotos(data)

    }
    // const changeEmail = ()=>{

    //     setEmial("test1new@gmail.com")
    // }
    return (
        <div className="container">
            <h4>My photos are here</h4>
            {/* <h4>email is {email}</h4>
            <button onClick={()=>changeEmail()}>update email</button> */}
            <p>{photos.length}</p>
            {photos.length && <div className="row">
                {photos.map((photo) => {
                    return(
                        <div className="col-md-3">
                            <div className="card">
                                <img className="card-img-top" src={photo.url} alt="Card image cap" />
                                <div className="card-body">
                                    <p className="card-text">{photo.title}</p>
                                </div>
                            </div>
                        </div>
                    )

                })}
            </div>}

        </div>
    )
}

export default MyPhotos