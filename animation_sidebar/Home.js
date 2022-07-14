import React from 'react'
import './../css/Home.css'
import Sidenav from './Sidenav'
import Navbar from './Navbar'
import Main from './Main'
export default function Home() {
    return (
        <div>
            
            <Navbar />
          
             <div style={{overflow:'hidden'}}>
            <div style={{overflow:'hidden'}} className='row'>
                <div style={{zIndex:1000}} className='col-1' >
                    <Sidenav />

                </div>
                <div className='col' >
                    <Main />

                    </div>
                
            </div>
            </div>
        </div>
    )
}
