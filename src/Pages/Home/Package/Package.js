import React from 'react';
import { GiCheckMark } from 'react-icons/gi';
import Button from '../../../Components/Share/Button/Button';
import img from '../../../Images/Advantages-of-Social.jpg'
import './Package.css'



const Package = () => {
    return (

        <div className="package">
            <img src={img} className="" alt='' />
            <div className=''>
                <h1 className=""><span className=''>Bring success</span> across social media channels</h1>
                <div className='packages'>
                    <span className=''> <GiCheckMark className='mt-1' /><p> No credit card required</p></span>
                    <span className=''> <GiCheckMark className='mt-1' /><p> 14-day free trial</p></span>
                    <span className=''> <GiCheckMark className='mt-1' /><p> Cancel anytime</p></span>

                </div>
                <Button text="Get Started" btn='btn-sm' key={1}>Get Started</Button>
            </div>
        </div>


    );
};

export default Package;