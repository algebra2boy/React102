import React from "react";

const Card = (props) => {
    return (
        <div className="Card">
            <img className="club" src={props.img} alt="club_picture" />
            <h3>{props.title}</h3>
            <h4>{props.subtitle}</h4>
            <a href={props.link}>
                <button>
                    View Club
                </button>
            </a>
        </div>
    );
};

export default Card;
