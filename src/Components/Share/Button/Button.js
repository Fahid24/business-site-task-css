import React from 'react';
import './Button.css'

const Button = ({ text, btn }) => {
    return (
        <div>
            <button className={`${btn}`}>{text}
            </button>
        </div>
    );
};

export default Button;