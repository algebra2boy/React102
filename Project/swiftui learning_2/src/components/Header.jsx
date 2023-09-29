import React from "react";

const Header = (props) => {
    
    return (
        <div className="header">
            <h1>Study Guide of SwiftUI!</h1>
            <h2>SwiftUI is a framework for building UI for iOS! Test your knowledge!</h2>
            <h3>Number of cards: {props.count}</h3>
            <div>
                <h2>Current Streak:{props.totalCorrect}, Longest Streak:{localStorage.getItem("streak")}</h2>
                <button
                    onClick={() => localStorage.removeItem("steak")}
                    className="submit-button"
                >Remove Streak</button>
            </div>
        </div>
    )
}



export default Header;