import img from './../logo192.png'
import React, { Component } from 'react'
import axios from 'axios'

export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            alert: false,
            submit: false,
            username: '',
            email: '',
            password: ''
        }
        this.onchangevalue = this.onchangevalue.bind(this)
        this.onsubmitt = this.onsubmitt.bind(this)
        this.alertf = this.alertf.bind(this)
    }
    onchangevalue(e) {
        const { name, value } = e.target
        if (name === 'username') {
            this.setState({
                username: value
            })
        }
        if (name === 'email') {
            this.setState({
                email: value
            })
        }
        if (name === 'password') {
            this.setState({
                password: value
            })
        }

    }
    alertf() {
        this.setState({
            alert: false
        })
    }
    onsubmitt(e) {
        e.preventDefault()


        const subuser = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
        }
        console.log('shayd body me ye jata hai---', subuser)
        this.setState({
            username: '',
            password: '',
            email: '',
        })

        axios.post('https://mernback12.herokuapp.com/user/add', subuser)
            .then(res => {
                if (res.data === 'Email Should be Unique') {
                    this.setState({
                        alert: true,
                        submit:false
                    })
                }else{
                    this.setState({
                        alert:false,
                        submit:true
                    })
                    setTimeout(() => {
                        this.setState({
                            alert:false,
                            submit: false
                        })
                        window.location = "/home"
                    }, 3000);
                }
            })
            .catch(e => console.log(e))
       
    }
    render() {
        return (
            <div className='container'>
                {this.state.alert ? <div className="alert mt-4 rounded alert-danger
                 alert-dismissible fade show" role="alert">
                    Email and Password Should be Unique
                    <button onClick={this.alertf} type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div> : null}
                {this.state.submit ? <div className='alert mt-4 rounded alert-success'>
                    Thanks's For submiting the form You'll render to the Home Page Soon.
                </div> : null}
                <nav className="navbar navbar-light bg-dark rounded mt-4">
                    <a className="navbar-brand" href="#">
                        <img src={img} width="30" height="30" className="d-inline-block align-top text-white" alt="" />
                        <span className='text-white mx-3'>Validation form</span>
                    </a>
                </nav>
                <form onSubmit={this.onsubmitt} className='container my-4'>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Username</label>
                        <input value={this.state.username} onChange={this.onchangevalue} name='username' type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input  value={this.state.email} onChange={this.onchangevalue} name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input  value={this.state.password} onChange={this.onchangevalue} name='password' type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}



