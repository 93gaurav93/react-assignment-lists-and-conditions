import React from 'react';

const Validation = (props) => {

    let style = {
        width: '700px',
        height: '20px',
        border: '2px solid red',
        padding: '10px',
        margin: '10px auto',
        fontSize: '18px',
    }

    let textLength = props.textValue.length;

    let error = '';

    if (textLength < 5) {
        error = "Text is too short...";
    } else if (textLength > 10) {
        error = "Text is too long...";
    }
    else {
        error = '';
    }

    return (
        <div style={style} className="validation">
            {error}
        </div>
    );
}

export default Validation;