import React from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch"; //custom fetch function

const Home = () => {
    // let name = 'mario';

    //now useFetch will handle the state changes of these 3 props
    const {data: blogs, isPending, err} = useFetch('http://localhost:8000/blogs') //change the 'data' to 'blogs' (data: blogs) if we want to refer data with another name

    return ( //invoke the functions when click is received
        <div className="home">
            {err && <div>{err}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title='All Blogs'/> } 
        </div>
    ) // all blogs page and search page
}

export default Home;