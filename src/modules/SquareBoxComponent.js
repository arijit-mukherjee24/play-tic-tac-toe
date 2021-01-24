import React from 'react';

function SquareBoxComponent(props) {
    const classes = (props.className ? `${props.className} square` : `square`)
    return (
        <span
            className={classes + (props.state === "X" ? ` fc-orange` : ` fc-sky`)}
            onClick={() => props.onClick(props.index)}>
           {props.state}
        </span>
    )
}

export default SquareBoxComponent;