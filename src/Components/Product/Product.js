import React from 'react';
import { BsFillArrowRightCircleFill } from "react-icons/bs";


const Product = ({ product }) => {
    const { img, type, logo, color, describe } = product;
    return (
        <div className="hover:text-primary hover:scale-105 transition delay-600 card bg-white shadow-xl">

            <figure><img src={img} alt={type} /></figure>

            <div className="card-body">
                <h2 className="card-title">
                    {logo}<small className={` text-${color}`}>{type}</small>
                </h2>

                <p className='card-title'>{describe}</p>

                <span className={`opacity-80 hover:opacity-100  hover:transition-opacity duration-300 flex items-center justify-between cursor-pointer`}>
                    <small className={`text-gray-500 font-semibold cursor-pointer  hover:text-black hover:font-bold`}>Automate publishing workflows</small><BsFillArrowRightCircleFill className={`text-${color} cursor-pointer text-4xl`} />
                </span>
            </div>
        </div>
    );
};

export default Product;