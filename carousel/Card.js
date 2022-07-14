import React from 'react'
import img from './umed.png'

function Card(props) {
    return (
        <>
            <div className="card mx-auto my-5 hoversc pointer" style={{ cursor:'pointer',width: 18 + 'rem' }}>
                <img className="card-img-top" src={img} alt="Card image cap" />
                <div className='imgtext'>
                    5 days to enroll
                </div>
                <div className="card-body transition duration-500 hover:scale-110">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text d-flex flex-column">
                        <div className='d-flex'>
                            <span style={{ fontSize: 19 + 'px', cursor: 'pointer' }} className='material-icons mr-2 text-red-600'>play_arrow</span>
                            <span style={{ fontSize: 12 + 'px', cursor: 'pointer' }} className='text-muted '>200 Live Classes</span>
                        </div>
                        <div className='d-flex mt-3 justify-content-between'>
                            <div className='d-flex'>
                                <span style={{ fontSize: 16 + 'px', cursor: 'pointer' }} className='material-icons mr-2 text-yellow-600'>live_help</span>
                                <span style={{ fontSize: 12 + 'px', cursor: 'pointer' }} className='text-muted '>200 Live Classes</span>
                            </div>
                            <div className='d-flex'>
                                <span style={{ fontSize: 16 + 'px', cursor: 'pointer' }} className='material-icons mr-2 text-green-600'>notes</span>
                                <span style={{ fontSize: 12 + 'px', cursor: 'pointer' }} className='text-muted '>200 Live Classes</span>
                            </div>

                        </div>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Card
