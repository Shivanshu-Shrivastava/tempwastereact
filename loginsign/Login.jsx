import React, {  useState } from 'react'
import { useHistory } from "react-router-dom";
function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    var history = useHistory();

    function submit(e) {
        e.preventDefault()
        setUsername('')
        setPassword('')
        alert("You'll redirect soon !Press ok")

        setTimeout(() => {
            history.push({
                pathname: '/main',
                state: { name: username }
            });
        }, 2000);


    }
    return (
        <div className='card shadow-lg'>
            <div className="header">
                <h2 className='bg-dark text-center rounded text-light py-3 '>Login</h2>
            </div>
            <form onSubmit={submit} className='px-sm-0 px-md-4'>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Username</label>
                    <input value={username} required onChange={e => setUsername(e.target.value)} type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Password</label>
                    <input value={password} required onChange={e => setPassword(e.target.value)} type="password" class="form-control" id="exampleFormControlInput1" placeholder="" />
                </div>
                <button type='submit' className='btn btn-dark d-block w-75 mx-auto'>Login</button>
            </form>
        </div>
    )
}

export default Login
