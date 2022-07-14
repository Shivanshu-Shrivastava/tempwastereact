import React from 'react'

function Navbar() {
    return (
        <header>
        <nav>
            <a className='linkB my-auto  sticky-top' href='#'>Loog</a>
            <div className='d-flex justify-content-between '>
                <a className='mr-3 my-auto linkB' href='#'>English</a>
                <button className='btn btn-outline-dark' type='button'>Sign In</button>
            </div>
        </nav>
        </header>
    )
}

export default Navbar
