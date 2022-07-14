import React, { useState } from 'react';
import Card from './Card'

const Posts = ({ posts, loading }) => {

    const [name, setName] = useState('')
    const [topic, setTopic] = useState('')
    const [region, setRegion] = useState('')
    const [source, setSource] = useState('')
    function handle(e) {
        if (e.target.name === 'sector') {
            setName(e.target.value)
        }
       
        if (e.target.name === 'topic') {
            setTopic(e.target.value)
        }
        if (e.target.name === 'region') {
            setRegion(e.target.value)
        }
        if (e.target.name === 'source') {
            setSource(e.target.value)
        }

    }
    console.log(topic)
    if (loading) {
        return (
            <span className='material-icons circle'>refresh</span>
        );
    }

    return (
        <>
            <form class="form-inline d-flex flex-wrap justify-content-between my-2 my-lg-0">
                <input name='sector' onChange={handle} class="form-control mr-sm-2" type="search" placeholder="Search by Sector" aria-label="Search" />
                <input name='topic' onChange={handle} class="form-control mr-sm-2" type="search" placeholder="Search by Topic" aria-label="Search" />
                <input name='region' onChange={handle} class="form-control mr-sm-2" type="search" placeholder="Search by Region" aria-label="Search" />
                <input name='source' onChange={handle} class="form-control mr-sm-2" type="search" placeholder="Search by Country" aria-label="Search" />
            </form>
            <ul className='list-group mb-4'>
                {posts.filter(val => {
                    //   console.log('val',val);
                    if (name == '' && topic=='' && region=='' && source=='' ) {
                        return val
                    }
                    else if  (name &&  val.sector.toLowerCase().includes(name.toLowerCase())) {
                        return val
                    }
                     else if (topic && val.topic.toLowerCase().includes(topic.toLowerCase())) {
                        return val
                    }
                    else if (region && val.region.toLowerCase().includes(region.toLowerCase())) {
                        return val
                    }
                    else if (source && val.country.toLowerCase().includes(source.toLowerCase())) {
                        return val
                    }
                    
                    
                }).map(post => (
                    
                    <Card key={post._id} data={post} />
                ))}
            </ul>
        </>
    );
};

export default Posts;