import { Dropdown } from 'bootstrap'
import React from 'react'


function List() {
    function Dro(){
        const show = document.getElementById('drpdo')
            show.classList.toggle('showw')
    }
    return (
        <div className='d-flex mt-5 justify-content-between'>
            <div className='d-flex flex-column'>
                <h2>List(6)</h2>

            </div>
            <div style={{ fontSize: 1.4 + 'rem' }} className='d-flex'>
          
                <span style={{ paddingTop: 'unset', paddingRight: 'unset', color: '#febb48' }} data-toggle="modal" data-target="#exampleModalCenter" className=''>+ Add New</span>
                <span style={{ paddingTop: 'unset', paddingRight: 'unset' }} className='material-icons text-mted my-auto'>filter_alt</span>
                <span style={{ paddingTop: 'unset', paddingLeft: 'unset', paddingRight: 'unset' }} className='text-mted ml-2'>Filter</span>
                <div style={{ position: 'relative' }} className=''>

                    <span  onClick={Dro} style={{ paddingTop: 'unset', paddingLeft: 'unset' }} className='my-auto ml-3'>All</span>
                    <div id='drpdo' style={{display:'none'}} className='  flex-column'>
                        <span className='drpitem'>Action</span>
                        <span className='drpitem'> Another Action</span>
                        <span className='drpitem'>Action</span>

                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default List
