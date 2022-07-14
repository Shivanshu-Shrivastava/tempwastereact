import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Modal() {
    const [coustomer_name, setCoustomer_name] = useState('')
    const [mobile, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [product_id, setProduct_id] = useState('')
    const [product_name, setProduct_name] = useState('')
    const [price, setPrice] = useState('')
    const [dele_date, setDele_date] = useState('')
    const [order_status, setOrder_status] = useState('')
    const [source, setSource] = useState('')
    const [pur_date, setPur_date] = useState('')
    function submit(e) {
        e.preventDefault()
        const newcous = {
            coustomer_name,
            mobile,
            email,
            address,
            product_id,
            product_name,
            price,
            dele_date,
            order_status,
            source,
            pur_date,
        }

        axios.post('https://aqgro.herokuapp.com/coustomer/add', newcous)
            .then(res => {
                console.log('aaya==', res, res.data)
                alert('Coustomer Created ')
            })
            .catch(e => {
                console.log(e)
                alert('Coustomer did not created please try again with another Credentials ')
            })

    }
    return (
        <div class="modal fade bd-example-modal-lg" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form onSubmit={submit}>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Coustomer Name</label>
                                <input onChange={e => setCoustomer_name(e.target.value)} name="coustomer_name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Mobile Number</label>
                                <input onChange={e => setMobile(e.target.value)} name='mobile' type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input onChange={e => setEmail(e.target.value)} name='email' type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Address</label>
                                <input onChange={e => setAddress(e.target.value)} name='address' type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Product ID</label>
                                <input onChange={e => setProduct_id(e.target.value)} name='product_id' type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Product Name</label>
                                <input onChange={e => setProduct_name(e.target.value)} name='product_name' type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Price</label>
                                <input onChange={e => setPrice(e.target.value)} name='price' type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Delivery Date</label>
                                <input onChange={e => setDele_date(e.target.value)} name='dele_date' type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Order Status</label>
                                <input onChange={e => setOrder_status(e.target.value)} name='order_status' type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Source of Order</label>
                                <input onChange={e => setSource(e.target.value)} name='source' type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Purchase Date</label>
                                <input onChange={e => setPur_date(e.target.value)} name='pur_date' type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-dark">Create</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Modal
