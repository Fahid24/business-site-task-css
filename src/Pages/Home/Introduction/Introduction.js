import React from 'react';
import logo from '../../../Images/B-logo.png'
import './Introduction.css'

const Introduction = () => {
    return (
        <div className='introduction'>
            <img className='w-20' src={logo} alt="" />

            <h1 className='text-3xl lg:text-5xl text-center     font-bold'>
                Everything teams need to
                <br />
                <span className='rounded-md border-b-4 border-secondary'>manage social media channels</span>
            </h1>

            <p className='text-center text-xl lg:text-2xl'>
                Build scalable and collaborative workflows to schedule content, deliver <br /> customer support via a social inbox, measure performance, and monitor <br /> brand health and competitors.
            </p>
        </div>
    );
};

export default Introduction;