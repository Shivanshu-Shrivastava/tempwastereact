import React, { useEffect } from 'react'
import './../css/Home.css'
import Modal from './Modal'

function Table(props) {
    function chadat(d) {
        const date = new Date(d)
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

    }
    
    return (
        <div className='bgt'>
            <div style={{ 'width': 'unset' }} className='table-responsive shadow-lg mt-5 container card '>
                <h1 className='text-center'>Coustomer Details</h1>
                <button type="button" class="btn mr-auto mb-4 btn-outline-dark" data-toggle="modal" data-target="#exampleModal">
                    Create
                </button>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Customer name</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">Email</th>
                            <th scope="col">address</th>
                            <th scope="col">product id</th>
                            <th scope="col">product name</th>
                            <th scope="col">price</th>
                            <th scope="col">delivery-date</th>
                            <th scope="col">order status</th>
                            <th scope="col">source of order</th>
                            <th scope="col">purchase date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.map(num =>
                            <tr>
                                <td>{num.coustomer_name}</td>
                                <td>{num.mobile}</td>
                                <td>{num.email}</td>
                                <td>{num.address}</td>
                                <td>{num.product_id}</td>
                                <td>{num.product_name}</td>
                                <td>{num.price}</td>
                                <td>{chadat(num.dele_date)}</td>
                                <td>{num.order_status}</td>
                                <td>{num.source}</td>
                                <td>{chadat(num.pur_date)}</td>
                            </tr>)}

                    </tbody>
                </table>
            </div>
            <Modal />
        </div>
    )
}

export default Table
