import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <a className="navbar-brand text-light" href="#">BlackCoffer</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse p-2" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link text-light" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    {/* <li className="nav-item active">
                        <Link className="nav-link text-light" to="/unscheduled">Unscheduled <span className="sr-only">(current)</span></Link>
                    </li> */}
                    
                </ul>
               

            </div>
        </nav>

    )
}

export default Navbar
