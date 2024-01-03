import { useState } from 'react';

import { useEffect } from 'react';

const Blogs = () => {
    const [blogs, setBlogs]=useState([])
    useEffect(()=>{
        fetch('cafa.json')
        .then(Response => Response.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div>
            <h1> Total :{blogs.length} </h1>

            
            
        </div>
    );
};

export default Blogs;