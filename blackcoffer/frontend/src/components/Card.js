import React from 'react'

function Card(props) {
    return (
        <div className="card my-3 w-100">
            <div className="card-header">
                <h5>Sector : {props.data.sector}</h5>
            </div>
            <div className="card-body">
                <div className='d-flex flex-wrap justify-content-between'>
                <p className="card-title"><h6 className='d-inline '>Intensity</h6> : {props.data.intensity}</p>
                <p className="card-title"><h6 className='d-inline '>Likelihood</h6> : {props.data.likelihood}</p>
                <p className="card-title"><h6 className='d-inline '>Relevance</h6> : {props.data.relevance}</p>
                <p className="card-title"><h6 className='d-inline '>Country</h6> : {props.data.country}</p>
                <p className="card-title"><h6 className='d-inline '>Topic</h6> : {props.data.topic}</p>
                <p className="card-title"><h6 className='d-inline '>Region</h6> : {props.data.region}</p>
                {props.data.start_year?<p className="card-title"><h6 className='d-inline '>Start Year</h6> : {props.data.start_year}</p>:null}
                {props.data.end_year?<p className="card-title"><h6 className='d-inline '>End Year</h6> : {props.data.end_year}</p>:null}
                
                </div>
                <p className="card-title"><h6 className='d-inline '>Title</h6> : {props.data.title}</p>

                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href={props.data.url} target='_blank' className="butn ">For More..</a>
            </div>
        </div>
    )
}

export default Card
