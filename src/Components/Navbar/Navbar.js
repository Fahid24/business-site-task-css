import React, { useState } from 'react';
import Button from '../Share/Button/Button';
import logo from '../../Images/images-removebg-preview.png';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { BiSearchAlt } from 'react-icons/bi';
import { MdOutlineShoppingCart } from 'react-icons/md';

import './Navbar.css'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <div className="Navbar">
                <div
                    className={`nav-toggle ${isOpen && "open"}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="bar"></div>
                </div>
                <div className='nav-logo'>
                    <img className='lg:w-[200px] h-[50px]' src={logo} alt="" />
                </div>
                <div className={`nav-items ${isOpen && "open"}`}>
                    <a href="/home">Products</a>
                    <a href="/about">Resources</a>
                    <a href="/service">Pricing</a>
                    <a href="/contact">Why Barlie.oi?</a>
                </div>


                <div>
                    <p><BiSearchAlt className='f-logo' /></p>
                    <p><IoIosNotificationsOutline className='f-logo' /></p>
                    <p><MdOutlineShoppingCart className='f-logo' /></p>

                </div>

                <div>
                    <span className=''>Sing up</span>

                    <Button text='Start free trial' btn='btn-sm' />
                </div>


            </div>
        </>
    );
};

export default Navbar;