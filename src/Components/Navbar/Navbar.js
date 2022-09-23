import React, { useState } from 'react';
import Button from '../Share/Button/Button';
import logo from '../../Images/images-removebg-preview.png'
import './Navbar.css'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <div className="navbar text-md font-semibold w-full bg-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>

                        {/* small display section */}
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li tabIndex={0}>
                                <button>
                                    Products
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </button>
                                <ul className="p-2">
                                    <li><button>Submenu 1</button></li>
                                    <li><button>Submenu 2</button></li>
                                </ul>
                            </li>                        <li tabIndex={0}>
                                <button className="justify-between btn-sm rounded-full">
                                    Resources
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </button>
                                <ul className="p-2">
                                    <li><button>Submenu 1</button></li>
                                    <li><button>Submenu 2</button></li>
                                </ul>
                            </li>
                            <li><button>Pricing</button></li>
                            <li><button>Why Sociality.io?</button></li>
                        </ul>
                    </div>

                    {/* navbar main logo */}
                    <div className='btn btn-ghost fill-current'>
                        <img className='lg:w-[200px] h-[50px]' src={logo} alt="" />
                    </div>
                </div>

                {/* large display section */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li tabIndex={0}>
                            <button>
                                Products
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </button>
                            <ul className="p-2">
                                <li><button>Submenu 1</button></li>
                                <li><button>Submenu 2</button></li>
                            </ul>
                        </li>                    <li tabIndex={0}>
                            <button>
                                Resources
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </button>
                            <ul className="p-2">
                                <li><button>Submenu 1</button></li>
                                <li><button>Submenu 2</button></li>
                            </ul>
                        </li>
                        <li><button >Pricing</button></li>
                        <li><button >Why Sociality.io?</button></li>
                    </ul>
                </div>
                <div className="navbar-end gap-3">

                    {/* search button */}
                    <button className="btn btn-ghost hidden lg:flex btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>

                    {/* notification button */}
                    <button className="btn btn-ghost hidden lg:flex  btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>

                    </button>
                    <div className="flex-none">

                        {/* add to chart button */}

                        <div className="dropdown hidden lg:flex  dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className="badge badge-sm indicator-item">8</span>
                                </div>
                            </label>
                            <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div className="card-body">
                                    <span className="font-bold text-lg">8 Items</span>
                                    <span className="text-info">Subtotal: $999</span>

                                    <div className="card-actions">
                                        <Button text='View chart' btn='btn-sm
                                    ' />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* sing up button */}
                    <button className='btn btn-ghost rounded-full btn-sm normal-case'>Sing up
                    </button>

                    <Button text='Start free trial' btn='btn-sm' />

                </div>
            </div>

            <div className="Navbar">
                <div className='nav-logo'>
                    <img className='lg:w-[200px] h-[50px]' src={logo} alt="" />
                </div>                <div className={`nav-items ${isOpen && "open"}`}>
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="/service">Service</a>
                    <a href="/contact">Contact</a>
                </div>
                <div
                    className={`nav-toggle ${isOpen && "open"}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="bar"></div>
                </div>
            </div>
        </>
    );
};

export default Navbar;