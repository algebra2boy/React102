import React from "react";

const BanListContainer = ({ banAttributeList, removeBanAttributeHandler }) => {
    return (
        <div className='rightSide nav'>
            <h2>Ban List</h2>
            <h4>Select an attribute in your listing to ban it</h4>
            {banAttributeList && banAttributeList.length > 0 &&
                banAttributeList.map((attribute, index) => (
                    <button
                        key={index}
                        className="ban-buttons"
                        onClick={removeBanAttributeHandler}
                        value={attribute}
                    >
                        {attribute}
                    </button>
                ))
            }
        </div>
    );
}

export default BanListContainer;