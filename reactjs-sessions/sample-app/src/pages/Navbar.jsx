import React from "react"
import { Link } from "react-router-dom"
function Navbar() {
    return (
        // <ul>
        //   <li><Link to="home">Home</Link></li>
        //   <li><Link to="aboutus">Aboutus</Link></li>
        //   <li><Link to="contactus">Contactus</Link></li>
        // </ul>

        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand">mylogo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="home" className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="aboutus" className="nav-link">Aboutus</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="contactus" className="nav-link" >Contactus</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="formhandling" className="nav-link" >Form handling demo</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="blogs" className="nav-link" >Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="functions" className="nav-link" >Functional comp</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="hooks" className="nav-link" >Hooks Demo</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="lifecycledemo" className="nav-link" >Lifecycleusecase</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar