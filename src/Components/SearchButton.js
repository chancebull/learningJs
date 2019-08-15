import React from 'react';


const searchbutton = (props) => {
    return(
        <div>
            <p>This is a paragraph tag for rendering purposes.</p>
            <button onClick = {props.clicked}>Press Me</button>
        </div>
    )
};

export default searchbutton;