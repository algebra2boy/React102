import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"
import person from "../../assets/person.png"

const Card = ({ crew }) => {
    return (
        <div className="Card" id={crew.color}>
            <Link to={`/${crew.id}`} id="link">
                <img src={person} alt="person" width={200} />
                <h3>Name of Crewmate: <span>{crew.name}</span></h3>
                <h3>Speed of Crewmate: <span>{crew.speed}</span></h3>
                <h3>Color of Crewmate: <span>{crew.color}</span></h3>
            </Link>
            <button className="button">Edit Crewmate</button>
        </div >
    );
};

export default Card;