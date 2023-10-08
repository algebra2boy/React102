import React from "react";

const LeftSideCatItemContainer = ({ catInfo }) => {
    return (
        <div className="cat-container">
            <img src={catInfo["url"]}
                alt="some random cat image"
                width="50px"
                height="50px"
            />
            <h5>{catInfo["name"]}</h5>
        </div>
    )
}

export default LeftSideCatItemContainer;