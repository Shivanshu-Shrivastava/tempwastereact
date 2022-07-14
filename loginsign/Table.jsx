import { Tab } from 'bootstrap';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import './../css/Home.css'
import Navbar from './Navbar'
import Token from './Token'

function Table() {
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [tokenshow, setTokenshow] = useState(false)
    const location = useLocation();
    function token() {
        if (tokenshow) {
            setTokenshow(false)
        }
        else {
            setTokenshow(true)

        }
    }
    useEffect(() => {
        setName(location.state.name)
    }, [])

    return (
        <>
            <Navbar name={name} />
            <div className='bgt p-33'>
                <div style={{ width: 'unset!important' }} className='carde shadow-lg   mx-auto '>
                    <h1 className='text-center'>Add Token</h1>
                    <div className='row' >
                        <div className="col-sm-12 d-flex flex-column col-md-3">
                            <button onClick={token} type="button" class="btn mr-auto mb-4 btn-outline-dark">
                                New Token
                            </button>
                            <Link to={{
                                pathname:'/report',
                                state:{ name: name }
                            }} class="btn mr-auto mb-4 btn-outline-dark">
                                Coustom Report
                            </Link>
                        </div>

                        <div className="col">
                            {tokenshow ? <Token /> : null}

                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Table
