import React from "react";
import "./Card.css"
import person from "../../assets/person.png"

const Card = ({ crew }) => {
    return (
        <div className="Card" id={crew.color}>
            <img src={person} alt="person" width={200} />
            <h3>Name of Crewmate: <span>{crew.name}</span></h3>
            <h3>Speed of Crewmate: <span>{crew.speed}</span></h3>
            <h3>Color of Crewmate: <span>{crew.color}</span></h3>
        </div>
    );
};

export default Card;