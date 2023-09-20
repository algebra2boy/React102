import React from "react";
import { useState } from "react";

const Card = (props) => {

    // props from parent
    const card = props.card;

    const [toggledCard, setToggledCard] = useState(false);

    const handleToggle = () => {
        setToggledCard((toggle) => !toggle);
    }

    return (
        <div className={toggledCard ? "card flipped" : `card ${card.category}`} onClick={handleToggle} id={card.id}>
            {!toggledCard ?
                <div className={"front"}>
                    <h3>{card.front}</h3>
                    <img src={card.url} alt="img" width="150px" height="100px"  />
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