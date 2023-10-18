import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <main>
            <p>There's nothing here!</p>
            <Link to="/">
                Back to Home
            </Link>
        </main>
    );
}

export default NotFound;