import React from "react";
import crewmates from "../../assets/crewmates.png"
import { useLocation, useParams } from "react-router-dom";
import "./Update.css"
import UpdateContainer from "./UpdateContainer";

const Update = () => {

    const data = useLocation().state.crewData;

    return (
        <div className="update">
            <h1>Update Your Crewmate :)</h1>
            <img src={crewmates} alt="crewmate" width={500} />
            
            <h1>Current Crewmate Info:</h1>
            <h2>Name: {data.name}, Speed: {data.speed}, Color: {data.color}</h2>
            <UpdateContainer id={data.id}/>
        </div>
    )
};

export default Update;