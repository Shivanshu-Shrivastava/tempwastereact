import React from 'react'
import Data from './Data'
const Home = () => {
    const arr = [
        {'name':'rohan',0:0,2:1,34:3},
        {
            'name':'mohan',0:3,22:7
        }
    ]
    
    return (
        <div className='mx-auto p-5'>
           {arr.map((num,ind)=>(
               <Data key={ind} data={num}/>
           ))

           }
        </div>
    )
}

export default Home
