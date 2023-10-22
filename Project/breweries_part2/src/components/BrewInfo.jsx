import React from "react";
import { useLocation } from 'react-router-dom';

const BrewInfo = () => {

    // get the state from the Link
    const location = useLocation();

    return (
        <>
            <h1>HELLO brew info</h1>
            {JSON.stringify(location)}
        </>
    );
}

export default BrewInfo;