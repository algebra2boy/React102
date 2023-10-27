import React from "react";
import { useState } from "react";
import "./Container.css";
import database from "../../database/database";

const Container = () => {

    const color = ["Red", "Green", "Blue", "Purple", "Yellow", "Orange", "Pink", "Rainbow"];
    const [crewmate, setCrewmate] = useState({
        "name": "",
        "speed": "",
        "color": ""
    });

    const clearState = () => setCrewmate({
        "name": "",
        "speed": "",
        "color": ""
    })

    const onClickHandler = async () => {
        try {
            await database
                .from("Crews")
                .insert({
                    "name": crewmate.name,
                    "speed": crewmate.speed,
                    "color": crewmate.color
                });
            alert("crew mate has been successfully created!");
            clearState();
        } catch {
            alert("something went wrong")
        }
    }

    return (
        <div>
            <form className="form-container">
                <div className="small-container">
                    <label>
                        <h3>Name:</h3>
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter crewmate's name"
                        value={crewmate.name}
                        onChange={(e) => setCrewmate({ ...crewmate, "name": e.target.value })}
                    />
                </div>

                <div className="small-container">
                    <label>
                        <h3>Speed (mpg):</h3>
                    </label>
                    <input
                        type="text"
                        name="speed"
                        placeholder="Enter speed in mpg"
                        value={crewmate.speed}
                        onChange={(e) => setCrewmate({ ...crewmate, "speed": e.target.value })} />
                </div>

                <div className="small-container">
                    <label><h3>Color</h3></label>
                    {color.map((c) => (
                        <li key={c}>
                            <input
                                id={c}
                                name="color"
                                type="radio"
                                value={c}
                                checked={crewmate.color === c}
                                onChange={(e) => setCrewmate({ ...crewmate, "color": e.target.value })} />
                            <label>{c}</label>
                        </li>
                    ))}
                </div>
            </form>
            <button className="button" onClick={onClickHandler}>Create Crewmate</button>
        </div>
    )
};

export default Container;