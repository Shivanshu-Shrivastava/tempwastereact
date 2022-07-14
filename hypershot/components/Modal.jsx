import React, { useState } from 'react'
import { PieChart, Pie, Legend, Tooltip} from 'recharts';



function Modal(props) {
    const [men, setMen] = useState(0)
    const [women, setWomen] = useState(0)
    const [ele, setEle] = useState(0)
    const [jelw, setJelw] = useState(0)
    function count(type) {
        const countTypes = props.posts.filter(movie => movie.category === type);
        return countTypes.length;

    }
    const data =[
        {name:"Men's ",value:count("men's clothing")},
        {name:"Women's ",value:count("women's clothing")},
        {name:"Electronics",value:count("electronics")},
        {name:"Jewelery",value:count("jewelery")}
    ]

    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Categories</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                            <PieChart width={400} height={400}>
                                <Pie
                                    dataKey="value"
                                    isAnimationActive={false}
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                    fill="#8884d8"
                                    label
                                />
                                <Tooltip />
                            </PieChart>
                        
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
