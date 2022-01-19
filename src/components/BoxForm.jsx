import React, {useState} from 'react';

//
const BoxForm = (props) => {

    //console.log(props.createBox);


    const[newColor, setNewColor] = useState("")


    const submitColor = (e) => {
        e.preventDefault();
        console.log(newColor);


        const newBox = {
            color: newColor
        }


        props.createBox(newBox);
        props.createBox({ color: newColor });

    }

    return (
        <fieldset>

            <legend>BoxForm.jsx</legend>
            
            New Color: {newColor}
            <br/><br/>
            
            <form onSubmit={submitColor}>
                <input type="color" onChange={e => setNewColor(e.target.value)} value={newColor}/>
                <button>submit</button>
            </form>

        </fieldset>
    )
}


export default BoxForm

