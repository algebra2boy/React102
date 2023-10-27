import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {

    const navBarOption = {
        "Dashboard": {
            "icon": "🏠",
            "link": "/"
        },
        "Create": {
            "icon": "🏗️",
            "link": "/create"
        },
        "Gallery": {
            "icon": "📕",
            "link": "/gallery"
        },
    };

    return (
        <div className="navBar">
            <ul>
                {navBarOption && Object.keys(navBarOption).map((nav) => (
                    <li className="navbar-option" key={nav}>
                        <Link className="navbar-link" to={navBarOption[nav]["link"]}>
                            <div>{navBarOption[nav]["icon"]} {nav}</div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NavBar;