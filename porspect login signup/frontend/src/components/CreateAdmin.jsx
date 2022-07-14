import React ,{ useState } from 'react'
import axios from 'axios'
function CreateAdmin() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    function submit(e){
        e.preventDefault()
        const newUserpass ={
            username,
            password
        }
        setUsername('')
        setPassword('')
        axios.post('https://aqgro.herokuapp.com/admin/add',newUserpass)
        .then(res => {console.log('aaya==',res , res.data)
        alert('Account Created ')
        window.location='/'
    })
        .catch(e => {console.log(e)
        alert('Account did not created please try again with another Credentials ')})

    }
    return (
        <div className='bg'>
            <div className='card sm p-4'>
            <h3 style={{'borderRadius':5+'px'}} className=' bg-dark text-center p-2 text-white'>Create Admin Account</h3>

                <form onSubmit={submit}>
                    <div class="form-group">
                        <label className='' for="exampleFormControlInput1">Username</label>
                        <input onChange={e=>setUsername(e.target.value)} name='username' type="text" class="form-control" id="exampleFormControlInput1" placeholder="Full Name" />
                    </div>
                    <div class="form-group">
                        <label className='' for="exampleFormControlInput1">Password</label>
                        <input onChange={e=>setPassword(e.target.value)} name='password' type="password" class="form-control" id="exampleFormControlInput1" placeholder="Your Password" />
                    </div>
                    <button type="submit" className="btn btn-dark d-block w-100 my-3">Create</button>



                </form>
            </div>
        </div>
    )
}

export default CreateAdmin
