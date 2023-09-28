import React from "react"

const GuessContainer = () => {
    return (
        <div className="guess">
            Guess the answer here: 
            <input type="text" name="answer" placeholder="Place your answer here..." />
            <button type="submit" className="submit-button">Submit Guess</button>
        </div>
    )
}

export default GuessContainer;