import React from "react";
import "./Home.css";
import crewmate from "../../assets/crewmates.png";
import spaceship from "../../assets/spaceship.png";

const Home = () => {
    return (
        <div className="Home">
            <h1>Welcome to Crewmate Creator!</h1>
            <h2>Here is where you can create your very own set of crewmates before sending off into space!</h2>
            <div className="pictures">
                <img src={crewmate} alt="crewmate" width={500} />
                <img src={spaceship} alt="spaceship" width={500} id="spaceship"/>
            </div>
        </div>
    )
}

export default Home;