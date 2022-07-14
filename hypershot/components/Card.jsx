import React from 'react'
import dateformat from 'dateformat'
import { Link } from 'react-router-dom'

function Card(props) {
    function cahD(date){
        return dateformat(date,"dS mmmm yyyy")
    }
    return (
        <>
            <div  className="card row g-0 p-4 m-4  container mx-auto mb-3" style={{width:'unset',maxWidth:713+'px'}}>
                <div className="col my-auto">
                    <img style={{width:200+'px'}} className="card-img-top mx-auto" src={props.image} alt="Card image cap" />

                </div>
                <div className="col">
                    <div className="card-body">
                        <h2 className="card-title">{props.title}</h2>
                        <p className="card-text"><span className='fs'>Category: </span>{props.category}</p>
                        <p className="card-text"><span className='fs'>Price: </span>{props.price}</p>
                        <p className="card-text"><span className='fs'>Rating: </span>{props.rating.rate}</p>
                        <p className="card-text"><span className='fs'>Description: </span>{props.description}</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Card
