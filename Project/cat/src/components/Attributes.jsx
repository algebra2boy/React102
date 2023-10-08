import React from "react";
import AttributeButton from "./AttributeButton";

const Attributes = ({ catInfo, clickHandler }) => {

    const attributes = ["life-span", "origin", "weight", "affection_level"];
    return (
        <div className="attributes">
            {catInfo &&
                attributes.map((attribute) =>
                    <AttributeButton 
                    // have to add a key in a map otherwise a warning
                    // list should have a unique "key" prop
                    clickHandler={clickHandler}
                    key={attribute}
                    name={attribute}
                    value={catInfo[attribute]} />
                )
            }
        </div>
    )
}

export default Attributes;