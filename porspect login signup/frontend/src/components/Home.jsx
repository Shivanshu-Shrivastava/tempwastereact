import React ,{useEffect,useState} from 'react'
import axios from 'axios'
import Table from './Table'

function Home() {

    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://aqgro.herokuapp.com/coustomer/')
        .then(res=>{

        
            console.log(res)
            setData(res.data)
        }
        )
        .catch(e=>console.log(e))
    }, [data])
    return (
        <div>
            <Table data={data} />
        </div>
    )
}

export default Home
