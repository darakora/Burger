import React from 'react';
import './Input.css';
import inputCase from  '../InputCase';

const input = ( props ) => {
    const inputClasses = (props.invalid && props.shouldValidate && props.touched) ? 'inputElement invalid': 'inputElement';
    return (
        <div className='input'>
            <label className='label'>{props.label}</label>
            {inputCase(props, inputClasses)}
        </div>
    );
};
export default input;