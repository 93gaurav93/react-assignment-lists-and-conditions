import React from 'react';
import styles from '../App.module.css';

const Input = (props) => {

    let inputStyles = [styles.textInput];

    inputStyles.push(styles.red);
    
    return (
        <input
            className={inputStyles.join(' ')}
            type="text"
            placeholder="Type here..."
            onChange={(event) => props.changed(event)}
            value={props.textValue}
        />
    );
}

export default Input;