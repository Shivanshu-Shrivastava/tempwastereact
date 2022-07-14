import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'
import './../css/Home.css'
import Dropdown from './Dropdown'
import Modal from './Modal'


export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            posts: [],
            sea:'',
        
            loading: false

        }


    }

    componentDidMount() {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                console.log(res)
                // console.log('text',res.data[0].show.image.medium)
                this.setState({
                    posts: res.data,
                    loading: true
                })
                console.log(this.state.posts);
            })
            .catch(e => console.log(e))
    }
    render() {

        console.log(this.state.sea)

        return (
            <section>
                <div className='d-flex flex-wrap mt-5 mb-3 container justify-content-between'>
                    <Dropdown />

                    <input style={{border:1+'px solid',padding:10+'px'}} placeholder='Search Item by TITLE...' onChange={e=>this.setState({sea:e.target.value})} type='search' />
                    <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#exampleModal">
                        Analyse
                    </button>
                </div>

                <main className=''>
                    {this.state.loading ? this.state.posts.filter((val)=>{
                        if (this.state.sea==''){
                            return val
                        }
                        else if(val.title.toLowerCase().includes(this.state.sea.toLowerCase())){
                            return val

                        }
                    }).map((num) =>

                        <Card key={num.id} id={num.id} image={num.image} category={num.category} description={num.description} price={num.price} title={num.title} rating={num.rate ? num.rating : 'none'} />









                    ) : <h1 className='text-center'>Loading...</h1>}


                </main>
                <Modal posts={this.state.posts} />


            </section>
        )
    }
}


