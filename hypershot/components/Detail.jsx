import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';
// import Bigcard from './Bigcard';
import Card from './Card';
import Dropdown from './Dropdown'
import Modal from './Modal'

function Detail() {
    const [posts, setPosts] = useState([])
    console.log(useParams())
    const { id } = useParams()
    useEffect(() => {
        if(id=='categories'){
            axios.get('https://fakestoreapi.com/products')
            .then(res => {
                console.log('resssss', res)
                setPosts(res.data)
                console.log(posts,'ee')
            } 
            )
            .catch(e => console.log(e))

        }else{
            axios.get('https://fakestoreapi.com/products/category/'+id)
            .then(res => {
                console.log('resssss', res)
                setPosts(res.data)
                console.log(posts,'ee')
            } 
            )
            .catch(e => console.log(e))
        }
        

    }, [posts])
    console.log(posts,'hiii');
    return (
        <div>
            <div className='d-flex flex-wrap mt-5 mb-3 container justify-content-between'>
                <Dropdown />

                <button  type="button" className="btn btn-secondary" data-toggle="modal" data-target="#exampleModal">
                    Analyse
                </button>
                </div>
      
            {posts.map(num=>
                <Card key={num.id} id={num.id} image={num.image} category={num.category} description={num.description} price={num.price} title={num.title} rating={num.rate ? num.rating : 'none'} />

                
                )}
                <Modal posts={posts} />

        </div>
    )
}

export default Detail
