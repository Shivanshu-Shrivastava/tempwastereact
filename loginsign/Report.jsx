import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'


function Report() {
    const [name, setName] = useState('')

    const location = useLocation()
    useEffect(() => {
        console.log(location);
        setName(location.state.name)
    }, [])

    return (
        <div>
            <Navbar name={name} />
            <div className='bgt p-33'>
                <div style={{ width: 'unset!important' }} className='carde shadow-lg   mx-auto '>
                <h1 className='text-center'>Custom Report</h1>
                <section className='d-flex flex-wrap justify-content-around'>
                    <div className='p-4 shadow-sm'>
                        <h5 className='text-center'>Today sell</h5>
                        <p className='text-center'>$200</p>
                    </div>
                    <div className='p-4 mx-sm-0 mx-md-3 my-sm-3 my-md-0 shadow-sm'>
                    <h5 className='text-center'>This Week</h5>
                    <p className='text-center'>$200</p>


                            
                    </div>
                    <div className='p-4 shadow-sm'>
                    <h5 className='text-center'>This Month</h5>
                    <p className='text-center'>$200</p>


                            
                    </div>

                </section>

                </div>
            </div>

        </div>
    )
}

export default Report
