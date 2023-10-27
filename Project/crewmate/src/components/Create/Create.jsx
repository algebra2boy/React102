import React from "react";
import crewmate from "../../assets/crewmates.png";
import Container from "./Container";

const Create = () => {
    return (
        <div className="Create">
            <h1>Create a New CreateMate</h1>
            <img src={crewmate} alt="crewmate" width={200} />
            <Container />
        </div>
    )
}

export default Create;