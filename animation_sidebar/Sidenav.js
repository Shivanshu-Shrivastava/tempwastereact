import { map } from 'jquery';
import React, { Component } from 'react'
import './../css/Home.css';
export default class Home extends Component {
    constructor(){
        super()
        this.mouse=this.mouse.bind(this)
        this.mousedo=this.mousedo.bind(this)
    }
    mouse(){
        const main = document.getElementsByClassName('t-2')[0]
       const side = document.getElementById('side')
          side.classList.add('active')
          side.classList.remove('inactive')
          main.classList.add('colinactive')
          main.classList.remove('colactive')


    }
    mousedo(){
        const main = document.getElementsByClassName('t-2')[0]

        const side = document.getElementById('side')
        main.classList.remove('colinactive')
        main.classList.add('colactive')


           side.classList.add('inactive')
           side.classList.remove('active')
 
 
     }
    render() 
    
    {

        
        return (
            <div onMouseOut={this.mousedo} onMouseOver={this.mouse}  id='side' className='sidenav inactive mt-2'>
                <nav className='d-flex flex-column'>
                    <span onClick={this.mousedo} style={{cursor:'pointer'}} class="material-icons icon">
                        arrow_forward_ios
                    </span>
                    <div style={{marginTop:9+'rem'}} className='d-flex flex-column'>
                        <span style={{cursor:'pointer'}} class="material-icons icon">
                            table_view
                        </span>
                        <span style={{marginTop:2+'rem',cursor:'pointer'}} class="material-icons icon">
                        brightness_7
                        </span>
                        <span style={{marginTop:2+'rem',cursor:'pointer'}} class="material-icons icon">
                        person_outline
                        </span>
                        <span style={{marginTop:2+'rem',cursor:'pointer'}} class="material-icons icon">
                            settings
                        </span>
                    </div>
                </nav>
            </div>
        )
    }
}
