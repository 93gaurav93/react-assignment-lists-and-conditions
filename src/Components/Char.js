import React from 'react';

const Char = (props) => {

    let style = {
        display: 'inline-block',
        border: '3px solid black',
        padding: '5px 10px',
        margin: '5px',
        fontSize: '30px',
        textAlign: 'center',
        fontWeight: 'bold',
        cursor: 'pointer',
    }

    return (
        <div style={style} className="char" onClick={(event) => props.click(event, props.index)}>
            {props.character}
        </div>
    );
}

export default Char;