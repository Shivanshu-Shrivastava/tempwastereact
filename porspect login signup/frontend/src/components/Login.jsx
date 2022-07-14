import React ,{ useState,useEffect } from 'react'
import './../css/Home.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [chedata, setChedata] = useState([])
    const [loginche, setLoginche] = useState(false)

    useEffect(() => {
        axios.get('https://aqgro.herokuapp.com/admin/')
        .then(res=>{

        
            console.log(res)
            setChedata(res.data)
        }
        )
        .catch(e=>console.log(e))
    }, [])
    function submit(e){
        e.preventDefault()
        let foundadmin = chedata.find(o => o.username == username && o.password == password);
        if (foundadmin){
            setTimeout(() => {
                
            window.location=`/table_page/${foundadmin.username}`

                
            }, 2000);
            alert("You'll redirect soon.Press Ok")
           

            console.log('found--',foundadmin)
        }
        else{
            alert('Credentials wrong.Please Create Account')
            console.log('not found')
            setLoginche(false)
        }


    }
    return (
        <div className='bg'>
            <div  className='card p-4 sm'>
                <h3 style={{'borderRadius':5+'px'}} className=' bg-dark text-center p-2 text-white'>Login</h3>
                <form onSubmit={submit}>
                    <div class="form-group">
                        <label className='' for="exampleFormControlInput1">Username</label>
                        <input name='username' onChange={e=>setUsername(e.target.value)} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Full Name" />
                    </div>
                    <div class="form-group">
                        <label className='' for="exampleFormControlInput1">Password</label>
                        <input onChange={e=>setPassword(e.target.value)} name='password' type="password" class="form-control" id="exampleFormControlInput1" placeholder="Your Password" />
                    </div>
                    <button type="submit" className="btn btn-dark d-block w-100 my-3">Submit</button>

                    
                    
                    </form>
                    <Link className=' d-block text-center' to='/create_account'>
                    Create account
                    </Link>
            </div>
        </div>
    )
}

export default Login
