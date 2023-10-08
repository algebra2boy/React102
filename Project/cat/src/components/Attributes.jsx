import React from "react";
import AttributeButton from "./AttributeButton";

const Attributes = (catInfo) => {
    return (
        <div className="attributes">
            {JSON.stringify(catInfo)

            }
        </div>
    )
}

export default Attributes;