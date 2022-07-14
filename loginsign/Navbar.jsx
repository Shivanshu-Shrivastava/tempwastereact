import React from 'react'
import { Link } from 'react-router-dom'
function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" href="#">Logo</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <div className="dropdown">
                            <button className=" btn btn-outline-dark  butn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {props.name? `Welcome ${props.name}`:'Welcome'}
                           
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                    <spna className='material-icons pr-2'>person</spna>
                                    <span>Logout</span></a>
                            </div>
                        </div>
                    </li>


                </ul>

            </div>
        </nav>
    )
}

export default Navbar
