import React from 'react'
import p1 from './p1.jfif'
import p2 from './p2.jfif'
import p3 from './p3.jfif'
import ins from './ins.png'
import lin from './lin.png'
function Home() {
    return (
        <div className='container'>
            <header>
                <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark bgf">
                    <a className="navbar-brand text-light" onclick="pop()" href="index.html">NewSite</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link text-light" onclick="pop()" href="index.html">Home <span className="sr-only">(current)</span></a>
                            </li>


                        </ul>
                    </div>
                </nav>
            </header>


            <section className="m-4 my-5">
                <div className="bg-light">
                    <h4 className="display-4 text-center fotn">CONTENTS</h4>
                    <hr className="w-50 mx-auto bg-dark" />
                </div>
                <div className="row mx-auto">
                    <div className="cardimg col">
                        <div className="card" style={{width:18+'rem'}}>
                            <img className="card-img-top" src={p1} alt="Card image cap" />
                            <div className="card-body">
                                <p className="card-text">Hello Everyone, I am Shivanshu currently pursuing B.TECH.</p>
                                <a href="https://www.linkedin.com/in/shivanshu-shrivastava-b1a0091b7/" className="link" target="_blank">My linkedIN Profile</a>
                            </div>

                        </div>
                    </div>
                    <div className="cardimg col">
                        <div className="card" style={{width:18+'rem'}}>
                            <img className="card-img-top" src={p2} alt="Card image cap" />
                            <div className="card-body">
                                <p className="card-text">Hello Everyone, I am Shivanshu currently pursuing B.TECH.</p>
                                <a href="https://www.linkedin.com/in/shivanshu-shrivastava-b1a0091b7/" className="link" target="_blank">My linkedIN Profile</a>
                            </div>

                        </div>
                    </div>
                    <div className="cardimg col">
                        <div className="card" style={{width:18+'rem'}}>
                            <img className="card-img-top" src={p3} alt="Card image cap" />
                            <div className="card-body">
                                <p className="card-text">Hello Everyone, I am Shivanshu currently pursuing B.TECH.</p>
                                <a href="https://www.linkedin.com/in/shivanshu-shrivastava-b1a0091b7/" className="link" target="_blank">My linkedIN Profile</a>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
            <div className="bg-light">
                <h4 className="display-4 text-center fotn"><span className="ani">
                    FOLLOW ME </span></h4>
                <hr className="w-50 mx-auto bg-dark" />
            </div>


            <footer className="bgf">
                <div className="d-flex justify-content-center">
                    

                    <a href="#"  className="m-4"> <img src={ins} alt="Instagram" className="image  mx-auto" /></a>
                    <a href="https://www.linkedin.com/in/shivanshu-shrivastava-b1a0091b7/" className="m-4" target="_blank"> <img src={lin} alt="Instagram" className="image  mx-auto" /></a>

                </div>

            </footer>
        </div>
    )
}

export default Home
