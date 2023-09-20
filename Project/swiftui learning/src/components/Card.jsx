import React from "react";
import { useState } from "react";

const Card = () => {
    const [toggledCard, setToggledCard] = useState(false);

    const handleToggle = () => {
        setToggledCard((toggle) => !toggle);
    }

    return (
        <div className={toggledCard ? "card flipped" : "card"} onClick={handleToggle}>
            {!toggledCard ?
                <div className="front">
                    <h3>Start the adventure of learning SwiftUI!</h3>
                    <br />
                </div> :

                <div className="back">
                    <h3>Press the next arrow to start the flashcards :)</h3>
                </div>
            }
        </div>
    )
}



export default Card;