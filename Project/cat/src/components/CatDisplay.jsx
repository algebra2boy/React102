import React from "react"
import Attributes from "./Attributes";

const CatDisplay = ({ catInfo, onSubmit }) => {
    return (
        <div className='whole-page'>
            <h1> Are you a cat lover?</h1>
            <h2> Discover cats from the Internet!</h2>

            {catInfo &&
                /*must add parent div to */
                <>
                    <div className="cat-container">
                        <div className="attributes-container">
                            <h2>{catInfo.name}</h2>
                            <Attributes
                                catInfo={catInfo}
                            />
                        </div>
                        <img
                            src={catInfo.url}
                            className="cat-image"
                            alt="random cat image from internet"
                            height="250px"
                            width="250px" />
                    </div>

                    <br />
                    <br />
                </>
            }

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