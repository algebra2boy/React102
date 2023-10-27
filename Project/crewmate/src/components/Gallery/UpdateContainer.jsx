import React from "react";
import { useState } from "react";
import database from "../../database/database";
import "../Create/Container.css";

const UpdateContainer = ({ id }) => {

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

    const updateHanlder = async () => {
        try {

            await database
                .from("Crews")
                .update({
                    "name": crewmate.name,
                    "speed": crewmate.speed,
                    "color": crewmate.color
                })
                .eq('id', id);

            alert("crew mate has been successfully updated!");
            clearState();
            
            window.location = `/gallery`;
        } catch {
            alert("something went wrong")
        }
    }

    const deleteHanlder = async () => {
        try {
            await database
                .from('Crews')
                .delete()
                .eq('id', id);
            alert("crew mate has been successfully deleted!");
            window.location = "/";
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

            <div>
                <button className="button" onClick={updateHanlder}>Update Crewmate</button>
                &nbsp; &nbsp;
                <button className="button" onClick={deleteHanlder}>Delete Crewmate</button>
            </div>
        </div>
    )
};

export default UpdateContainer;