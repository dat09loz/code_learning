import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate(); //represent history: go back, go forwand ,etc.

    const handleSubmit = (e) => {
        e.preventDefault(); //prevent the whole page to be refreshed after click submit ()
        const blog = { title, body, author } //form an blog object that contains all states

        setIsPending(true); //sending data
        
        fetch('http://localhost:8000/blogs', {//fetch from this address
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }, //tell the server that we are sending json data
            body: JSON.stringify(blog) //convert this object into a JSON abject
        }).then(() => {
            console.log('new blog added')
            setIsPending(false) //finished sending data
            // navigate(-1) //go back 1 in history
            navigate('/'); //go to a specific route
        })
    }

    return(
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={ handleSubmit }>
                <label>Blog Title</label>
                <input 
                    type="text"
                    required 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} //a two-way binding between value in the title and the input box
                />
                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding...</button>}
            </form>
        </div>
    );
}

export default Create;