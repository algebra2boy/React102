import React from "react";
import "./Header.css"


const Header = () => {
    return (
        <div className="Header">
            <img
                className="icon"
                src="https://png.pngtree.com/png-clipart/20220125/original/pngtree-beer-png-image_7209170.png"
                alt="moon logo" />
            <h3 className="title">Breweries</h3>
        </div>
    );
}

export default Header;
