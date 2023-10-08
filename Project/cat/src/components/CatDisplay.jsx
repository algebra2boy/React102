import React from "react"
import Attributes from "./Attributes";

const CatDisplay = ({ catInfo, onSubmit }) => {
    return (
        <div className='whole-page'>
            <h1> Are you a cat lover?</h1>
            <h2> Discover cats from the Internet!</h2>

            <div className="cat-container">
                <div className="attributes-container">
                    <h2>{catInfo.name}</h2>
                    <Attributes
                        catInfo={catInfo}
                    />
                </div>
                <img
                    src={catInfo.url}
                    alt="random cat image from internet"
                    height="200px"
                    width="200px" />
            </div>

            <br />
            <br />

            <button
                type="submit"
                className="button"
                onClick={onSubmit}
            >
                🔀 Discover
            </button>
        </div>
    )
}

export default CatDisplay;