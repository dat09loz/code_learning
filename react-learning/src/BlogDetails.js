import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
    const {id} = useParams()
    const {data: blog, err, isPending} = useFetch('http://localhost:8000/blogs/' + id); //fetch blog from 
    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {//fetch from this address
            method: 'DELETE',
        }).then(() => {
            console.log('blog deleted')
            // navigate(-1) //go back 1 in history
            navigate(-1); //go to a specific route
        })
    }

    return (
        <div className="blog-details">       
            {isPending && <div>Loading...</div>}
            {err && <div>{err}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <h3>Written by: {blog.author}</h3>
                    <div>{blog.body}</div>
                </article>
            )}
            <button onClick={ handleClick }>Delete</button>
        </div>
    )
}

export default BlogDetails;