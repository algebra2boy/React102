import React from "react";
import LeftSideCatItemContainer from "./LeftSideCatItemContainer";

const LeftSideListContainer = ({ catHistory }) => {
    return (
        <div className='leftSide nav'>
            <h2>Which cat have we seen</h2>
            {catHistory && catHistory.length > 0 &&
                catHistory.map((cat, index) => <LeftSideCatItemContainer catInfo={cat} key={index} />)
            }
        </div>
    );
};


export default LeftSideListContainer;