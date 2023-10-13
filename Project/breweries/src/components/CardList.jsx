import React from "react";
import "./CardList.css";

const CardList = ({ breweries }) => {

    const search = (searchTerm) => {
        const freq = (breweries.reduce((acc, e) => {
            if (acc[e[searchTerm]] !== undefined) ++acc[e[searchTerm]];
            else acc[e[searchTerm]] = 1;
            return acc;
        }, {}));
        const most = Object.keys(freq).sort((a, b) => freq[b] - freq[a])[0]; // use the key to sort values
        return most;
    };
    
    const findTheMostState = () => search("state"); // the state with the most breweries
    const findTheMostBrewType = () => search("brewery_type"); // the state with the most brew type
    const countBrew = () => breweries.length;

    return (
        <div className="CardList">
            <div className="Card">
                <h2>The state with most brew</h2>
                <h3>{findTheMostState()}</h3>
            </div>

            <div className="Card">
                <h2>The most brew type</h2>
                <h3>{findTheMostBrewType()}</h3>
            </div>

            <div className="Card">
                <h2>Total number of brew</h2>
                <h3>{countBrew()}</h3>
            </div>
        </div>
    )
}

export default CardList;