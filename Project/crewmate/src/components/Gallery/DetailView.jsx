import React from "react";
import over from "../../assets/over.png"
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./DetailView.css";

const DetailView = () => {

    const location = useLocation();
    const crew = location.state.crewData;

    return (
        <div className="edit">
            <h1>Crewmate:</h1>
            <h2>Stats: </h2>
            <h2>Name: {crew.name}</h2>
            <h2>Color: {crew.color}</h2>
            <h2>Speed: {crew.speed}</h2>

            <h2>You may want to find a Crewmate with more speed, this one is kind of slow 😬</h2>

            <div className="container">
                <img src={over} alt="picture" width={200} />
                <Link to={`/update/${crew.id}`} state={{ "crewData": crew }} id="link">
                    <button className="button">Wanna edit this Crewmate?</button>
                </Link>
            </div>
        </div>
    )
};

export default DetailView;