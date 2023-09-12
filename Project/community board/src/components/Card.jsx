import React from "react";

const Card = () => {
    return (
        <div className="Card">
            <img className="club" src="https://imageio.forbes.com/specials-images/dam/imageserve/966248982/960x0.jpg?height=456&width=711&fit=bounds" alt="club_picture" />
            <h3>Machine Learning Club</h3>
            <h4>Python</h4>
            <a href="https://umass.acm.org/sigs/Machine-Learning">
                <button>
                    View Club
                </button>
            </a>
        </div>
    );
};

export default Card;
