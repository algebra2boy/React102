import React from "react";
import "./Navbar.css";

const NavBar = () => {

    const navBarOption = {
        "Dashboard": "🏠",
        "Create": "🏗️",
        "Gallery": "📕",
    };

    return (
        <div className="navBar">
            <ul>
                {navBarOption && Object.keys(navBarOption).map((nav) => (
                    <li className="navbar-option" key={nav}>
                        <a href="/" className="navbar-link">
                            <div>{navBarOption[nav]} {nav}</div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NavBar;