import React from "react";
import "./Header.css"


const Header = () => {
    return (
        <div className="Header">
            <img
                className="icon"
                src="https://img.icons8.com/fluency/344/full-moon.png"
                alt="moon logo" />
            <h3 className="title">AstroDash</h3>
        </div>
    );
}

export default Header;
