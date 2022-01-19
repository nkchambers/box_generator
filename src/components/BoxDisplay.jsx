import React from 'react'

const BoxDisplay = (props) => {
    
    
/*
    console.log(props.box);
    console.log(props.box.color);
    console.log(props.index);
*/

    const { box } = props

    return (
        <div style={{
            backgroundColor: box.color,
            height: "100px",
            width: "100px",
            display: "inline-block"
        }}>
            {box.color}<br/>

            <button onClick={() => props.deleteBox(props.index)}>Delete</button>
        </div>
    )
}

export default BoxDisplay