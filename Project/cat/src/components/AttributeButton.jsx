import React from "react";

const AttributeButton = ({ name, value }) => {
    return (
        <div className="buttons">
            <button type="attribute" className="attribute-buttons" id={name}>
                {value}
            </button>
        </div>
    )
}

export default AttributeButton;