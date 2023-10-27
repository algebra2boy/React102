import React from "react";
import { useEffect } from "react";
import database from "../../database/database";
import { useState } from "react";
import Card from "./Card";
import "./Gallery.css"

const Gallery = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await database
                .from('Crews')
                .select()
                .order('created_at', { ascending: true });

            // set state of posts
            setData(data);
        }
        fetchData();
    }, [])

    return (
        <div className="gallery">
            <h1>Your Crewmate Gallery!</h1>
            <div className="crewmate-gallery">
                {data && data.map((crew, index) => <Card crew={crew} key={index}/>)}
            </div>
        </div>
    );
};

export default Gallery