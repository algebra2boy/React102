import React from "react";

const Header = (props) => {
    return (
    <div className="header">
        <h1>Study Guide of SwiftUI!</h1>
        <h2>SwiftUI is a framework for building UI for iOS! Test your knowledge!</h2>
        <h3>Number of cards: {props.count}</h3>
        <br />
    </div>
    )
}



export default Header;