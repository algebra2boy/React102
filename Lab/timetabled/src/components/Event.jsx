import React from "react";

const Event = (props) => {
    return (
        <td className={ "Event " + props.color }>
            <h5>{props.event}</h5>
            <h5>{props.location}</h5>
        </td>
    )
}

export default Event;