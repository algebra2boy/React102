import React from "react";
import over from "../../assets/over.png"
import { useParams, useLocation } from "react-router-dom";
import "./DetailView.css";

const DetailView = () => {

    const { id } = useParams();
    const location = useLocation();
    const data = location.state.crewData;
    console.log(data);
    console.log(id)

    return (
        <div className="edit">
            <h1>Crewmate:</h1>
            <h2>Stats: </h2>
            <h2>Name: {data.name}</h2>
            <h2>Color: {data.color}</h2>
            <h2>Speed: {data.speed}</h2>

            <h2>You may want to find a Crewmate with more speed, this one is kind of slow 😬</h2>

            <div className="container">
                <img src={over} alt="picture" width={200} />
                <button className="button">Wanna edit this Crewmate?</button>
            </div>
        </div>
    )
};

export default DetailView;