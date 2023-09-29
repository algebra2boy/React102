import React from "react";

const Card = ({ card, toggledCard, setToggledCard }) => {

    const handleToggle = () => {
        setToggledCard((toggle) => !toggle);
    }

    return (
        <div className={toggledCard ? "card flipped" : `card ${card.category}`} onClick={handleToggle} id={card.id}>
            {!toggledCard ?
                <div className={"front"}>
                    <h3>{card.front}</h3>
                    <img src={card.url} alt="img" width="150px" height="100px" />
                    <br />
                </div> :

                <div className="back">
                    <h3>{card.back}</h3>
                </div>
            }
        </div>
    )
}



export default Card;