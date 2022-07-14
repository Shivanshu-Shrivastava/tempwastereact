import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Dropdown() {
    const [setdrop, setsetdrop] = useState('')
    
    function active(){
        const btn = document.getElementById('dropdownMenuButton1')
        const menu = document.getElementById('menu')
        btn.classList.toggle('active')
        if (btn.classList.contains('active')){
            menu.classList.add('unse')
        }else{
            menu.classList.remove('unse')

        }
    }
    return (

        <div className="dropdown">
            <button onClick={active} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Searach by category
            </button>
            <ul id='menu' className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><Link  className="dropdown-item" to={'/category/categories'}>All Categories</Link></li>
                  
                <li><Link   className="dropdown-item" to={"/category/men's clothing"}>Men</Link></li>
                <li><Link className="dropdown-item" to={"/category/women's clothing"}>Women</Link></li>
                <li><Link className="dropdown-item" to={'/category/jewelery'}>jewelery</Link></li>
                <li><Link className="dropdown-item" to={'/category/electronics'}>Electronics</Link></li>
            </ul>
        </div>

    )
}

export default Dropdown
