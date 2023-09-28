import React from "react"

const GuessContainer = ({ handleChange, handleSubmit, result, value }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="guess">
                Guess the answer here:
                <input
                    type="text"
                    name="answer"
                    placeholder="Place your answer here..."
                    className={result}
                    value={value}
                    onChange={handleChange} />
                <button
                    type="submit"
                    className="submit-button">
                    Submit Guess
                </button>
            </div>
        </form>
    )
}

export default GuessContainer;