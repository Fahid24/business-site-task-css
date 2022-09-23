import React from 'react';

const Button = ({ text, btn }) => {
    return (
        <button className={`btn btn-primary rounded-full normal-case ${btn} text-white border-3 border-y-red-500`}>{text}
        </button>
    );
};

export default Button;