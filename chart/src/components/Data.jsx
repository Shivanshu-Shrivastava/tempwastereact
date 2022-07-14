import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
const Data = (props) => {
    const [graphvalue, setGraphvalue] = useState('')
    const history = useHistory();
    useEffect(() => {
            console.log(graphvalue)
            if(graphvalue!='javascript' && graphvalue!=''){
                history.push({
                    pathname: '/showgraph',
                    
                    state: { data: props.data ,nameGraph:graphvalue}
                });
            }
            
    }, [graphvalue])


    return (
        <article className='p-3 rounded card my-3 shadow-sm mx-auto '>
            <div className='flex items-center justify-between'>
                {props.data.name}

                <select onChange={(e) => (setGraphvalue(e.target.value))} 
                >
                    <option disable value="javascript">Add Graph</option>

                    {/* <Link className='shadow-sm' to={{
                            pathname: `/showgraph`,
                            state: { data: props.data }
                        }}>
                            Bar
                        </Link> */}

                    <option value="Pie">Pie</option>
                    <option value="Bar">Bar</option>
                    <option value="Doughnut">Doughnut</option>
                    <option value="PolarArea">PolarArea</option>
                    <option value="Bubble">Bubble</option>
                    <option value="Scatter">Scatter</option>
                    <option value="Radar">Radar</option>

                </select>
                {/* <Link className='shadow-sm' to={{
                    pathname: `/showgraph`,
                    state: { data: props.data }
                }}>
                    Add Graph
                </Link> */}

            </div>

        </article>
    )
}

export default Data