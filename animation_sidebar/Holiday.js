import React from 'react'
import Table from './Table'
import List from './List'


function Holiday() {
    return (
        <>
            <div className='d-flex mn justify-content-between'>
                <div className='d-flex flex-column'>
                    <h2>Holiday</h2>
                    <span style={{
                        paddingLeft: 'unset',
                        fontSize: 1.3 + 'rem'
                    }} className='text-muted' >Assign the holiday that you want to give to your Employee for the Year.</span>
                </div>
                <div style={{fontSize:1.4+'rem'}} className='d-flex'>
                    <span style={{ paddingTop: 'unset', paddingRight: 'unset',marginTop:4+'px' }} className='material-icons text-mted'>date_range</span>
                    <span style={{ paddingTop: 'unset', }} className='text-mted'>Year</span>

                </div>

            </div>
            <div>
                <List />
            </div>
            <div className="">
                <Table />
            </div>
        </>
    )
}

export default Holiday
