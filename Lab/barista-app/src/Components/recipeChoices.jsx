import React from "react";


const RecipeChoices = ({ handleChange, label, choices, checked }) => {
    return (
        <div className="radio-buttons">
            <input 
                type="text"
                name={label}
                placeholder="Guess the ingredient..."
                onChange={handleChange}
                className="textbox"
            />
            
                {choices &&
                choices.map((choice) => (
                    <li key={choice}>
                        {/* <input
                            id={choice}
                            value={choice}
                            name={label}
                            type="radio"
                            // since handleChange is a closure so we can notify the parent whenever this ls compoent has been changed
                            onChange={handleChange}
                            checked={checked == choice}
                        /> */}
                        {choice}
                    </li>
                ))}
        </div>
    );
};


export default RecipeChoices;