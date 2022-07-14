import React from 'react'
import Holiday from './Holiday'

function Main() {
    // function moud(){
        // const main = document.getElementsByClassName('t-2')[0]

    // }
    return (
        <div className='t-2 row' style={{backgroundColor:'white',borderRadius:.5+'rem'}}>
           
                <div style={{borderRight: '1px solid #80808087'}} className='mt-5 col-12 col-md-3 d-flex flex-column'>
                    <span className='butn-sam text-center'>General</span>
                    <span className='butn text-center'>Holiday</span>
                    <span className='butn-sam text-center'>Leave</span>
                </div>
                <div className='col mt-5'>
                    <Holiday />
                </div>
            
        </div>
    )
}

export default Main
