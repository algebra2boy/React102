import React from "react";

const AttributeButton = ({ name, value, clickHandler }) => {
    return (
        value ?
            <div className="buttons" >
                <button
                    type="attribute"
                    className="attribute-buttons"
                    onClick={clickHandler}
                    id={name}
                    value={value}>
                    {`${name}: ${value}`}
                </button>
            </div>
            : null
    );
}

export default AttributeButton;