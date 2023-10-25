import React, { useState } from 'react';
import './CreatePost.css'
import { supabase } from "../client.js";

const CreatePost = () => {

    const [post, setPost] = useState({
        title: "",
        author: "",
        description: ""
    });

    const createPost = async (event) => {
        event.preventDefault();

        await supabase
            .from('Posts')
            .insert({
                title: post.title,
                author: post.author,
                description: post.description
            })
            .select();

        window.location = "/";

    }

    return (
        <div>
            <form onSubmit={createPost}>
                <label htmlFor="title">Title</label> <br />
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={post.title}
                    onChange={(e) => setPost({ ...post, "title": e.target.value })} /><br />
                <br />

                <label htmlFor="author">Author</label><br />
                <input
                    type="text"
                    id="author"
                    name="author"
                    value={post.author}
                    onChange={(e) => setPost({ ...post, "author": e.target.value })}
                /><br />
                <br />

                <label htmlFor="description">Description</label><br />
                <textarea
                    rows="5"
                    cols="50"
                    id="description"
                    value={post.description}
                    onChange={(e) => setPost({ ...post, "description": e.target.value })}
                >
                </textarea>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default CreatePost