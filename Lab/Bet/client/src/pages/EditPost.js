import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css'
import { supabase } from '../client';

const EditPost = ({ data }) => {

    const { id } = useParams();
    const post = data.filter(item => item.id === id)[0];

    const [formData, setFormData] = useState({
        title: '',
        author: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    useEffect(() => {
        if (post) {
            setFormData({
                title: post.title,
                author: post.author,
                description: post.description,
            });
        }
    }, [post]);

    const updatePost = async (event) => {
        event.preventDefault();

        await supabase
            .from('Posts')
            .update({ title: formData.title, author: formData.author, description: formData.description })
            .eq('id', id);

        window.location = "/";
    }

    const deletePost = async (event) => {
        event.preventDefault();

        await supabase
            .from('Posts')
            .delete()
            .eq('id', id);

        window.location = "/";
    }

    return (
        <div>
            <form onSubmit={updatePost}>
                <label htmlFor="title">Title</label> <br />
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                /><br />
                <br />

                <label htmlFor="author">Author</label><br />
                <input
                    type="text"
                    id="author"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                /><br />
                <br />

                <label htmlFor="description">Description</label><br />
                <textarea
                    rows="5"
                    cols="50"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                ></textarea>
                <br />
                <input type="submit" value="Submit" />
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost