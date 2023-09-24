import React from "react";
import { useState } from "react";
import drinksJson from "./drinks.json";
import RecipeChoices from "./recipeChoices";

const BaristaForm = () => {

    const [currentDrink, setCurrentDrink] = useState("");
    const [trueRecipe, setTrueRecipe] = useState({}); // used to determine whether the user knows their stuff

    // these state variables are either "correct" or "wrong"
    const [correct_temp, setCheckedTemperature] = useState('');
    const [correct_syrup, setCheckedSyrup] = useState('');
    const [correct_milk, setCheckedMilk] = useState('');
    const [correct_blended, setCheckedBlended] = useState('');

    const [inputs, setInputs] = useState({
        'temperature': '',
        'milk': '',
        'syrup': '',
        'blended': ''
    });

    const ingredients = {
        'temperature': ['hot', 'lukewarm', 'cold'],
        'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
        'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
        'blended': ['yes', 'turbo', 'no']
    };

    // go through each state vairable we have and check it against the trueRecipe that we got from our drinksJSON
    const onCheckAnswer = () => {
        trueRecipe.temp != inputs['temperature'] ? setCheckedTemperature('wrong') : setCheckedTemperature("correct");
        trueRecipe.syrup != inputs['syrup'] ? setCheckedSyrup('wrong') : setCheckedSyrup("correct");
        trueRecipe.milk != inputs['milk'] ? setCheckedMilk('wrong') : setCheckedMilk("correct");
        trueRecipe.blended != inputs['blended'] ? setCheckedBlended('wrong') : setCheckedBlended("correct");
    };

    const onNewDrink = () => {
        // clear the previous drink and deselect the user's choice, then rnadomly choose the next drink
        setInputs({
            'temperature': '',
            'milk': '',
            'syrup': '',
            'blended': ''
        });

        setCheckedTemperature('');
        setCheckedSyrup('');
        setCheckedMilk('');
        setCheckedBlended('');

        getNextDrink();
    };

    const getNextDrink = () => {
        // get random drink
        let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);

        setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
        setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
    };

    return (
        <div>
            <h2>Hi, I'd like to order a:</h2>
            <div className="drink-container">
                <h2 className="mini-header">{currentDrink}</h2>
                <button
                    type="new-drink-button"
                    className="button newdrink"
                    onClick={onNewDrink}
                ></button>
            </div>
            <form>
                <h3>Temperature</h3>
                <div className="answer-space" id={correct_temp}>
                    {inputs["temperature"]}
                </div>
                <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        // other state no need to be changed, we are only changing the variables that have been changed
                        ...prevState,
                        // e is a HTML element, and the following code [e.target.name] deconstructs the html element 
                        // e.target retrieves a list of html attributes
                        // since input has many attributes, we pick name, which is same as the label
                        //  
                        [e.target.name]: e.target.value,
                    }))}
                    label="temperature"
                    choices={ingredients["temperature"]}
                    checked={inputs["temperature"]}
                />

                <h3>milk</h3>
                <div className="answer-space" id={correct_milk}>
                    {inputs["milk"]}
                </div>
                <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    label="milk"
                    choices={ingredients["milk"]}
                    checked={inputs["milk"]}
                />

                <h3>syrup</h3>
                <div className="answer-space" id={correct_syrup}>
                    {inputs["syrup"]}
                </div>
                <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    label="syrup"
                    choices={ingredients["syrup"]}
                    checked={inputs["syrup"]}
                />

                <h3>blended</h3>
                <div className="answer-space" id={correct_blended}>
                    {inputs["blended"]}
                </div>
                <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    label="blended"
                    choices={ingredients["blended"]}
                    checked={inputs["blended"]}
                />

            </form>

            <button type="submit" className="button submit" onClick={onCheckAnswer}>
                Check Answer
            </button>

            <button type="new-drink-button" className="button newdrink" onClick={onNewDrink}>
                New Drink
            </button>
        </div>
    )
};

export default BaristaForm;