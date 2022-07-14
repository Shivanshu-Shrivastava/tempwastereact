import React from 'react'

function Token() {
    return (
        <div class="alert text-end alert-dark mt-3" role="alert">
            <h5 style={{textAlign:'end',cursor:'pointer'}}>Token Number</h5>
            <div  className='d-flex px-12 my-5 justify-content-between'>
            <button type="button" class="btn btn-outline-dark">A</button>
            <button type="button" class="btn btn-outline-dark">B</button>
            <button type="button" class="btn btn-outline-dark">C</button>

            <button type="button" class="btn btn-outline-dark">D</button>

            </div>
            <button type="button" class="btn d-block mx-auto btn-outline-dark">Print</button>
            
        </div>
    )
}

export default Token
