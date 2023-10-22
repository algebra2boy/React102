import React from "react";
import { Link } from "react-router-dom";

const HomeButton = () => {
    return (
        <nav>
            <ul>
                <li className="home-link" key="home-button">
                    <Link to="/">
                        Home
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default HomeButton;