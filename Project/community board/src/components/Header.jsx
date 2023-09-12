import React from "react";
import awning from "../assets/awning.png";

const Header = () => {
    return (
    <div className="header">
        <img src={awning} alt="top" />
        <h1 id="top-header-text">Computer Science Clubs</h1>
    </div>
    )
}



export default Header;