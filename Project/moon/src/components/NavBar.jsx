import React from "react";
import "./Navbar.css";

const NavBar = () => {

    const navBarOption = {
        "Dashboard": "🏠",
        "Search": "🔍",
        "About": "📕",
    };

    return (
        <div className="navBar">
            <ul>
                {navBarOption && Object.keys(navBarOption).map((nav) => (
                    <li className="navbar-option" key={nav}>
                        <span className="icon">{navBarOption[nav]}</span>
                        <h4 className="title">{nav}</h4>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NavBar;