import React from 'react';
import classes from './Button.css';


const Button = (props) => {
    return(
        // A special button used in different parts of website
        <button 
        type={props.type || "button"}
        className={`${classes.button} ${props.className}`}
        onClick={props.onClick}
        disabled={props.disabled}
        onChange={props.onChange}
        >
            <span className={classes.button__text}>{props.text}</span>
            <span className={classes.button__icon}>
                <i className={props.icon} />
            </span>
        </button>
    )
}

export default Button;