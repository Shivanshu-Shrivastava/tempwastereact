import React from 'react'

function Navbar() {
    return (
        <div style={{backgroundColor:'white'}} className=''>
            <nav  className="container navbar  navbar-expand-lg navbar-light ">
                <a style={{letterSpacing:1.3+'px',fontWeight:'200'}} className="navbar-brand" href="#"><span style={{color:'#93a2e4',fontSize:1.5+'rem',marginRight:.2+'rem'}} className='material-icons '>settings</span>Setting</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ">
                            <a className="nav-link material-icons" href="#">home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link material-icons" href="#">help_outline</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link material-icons" href="#">settings_suggest</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link material-icons" href="#">savings</a>
                        </li>

                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default Navbar
