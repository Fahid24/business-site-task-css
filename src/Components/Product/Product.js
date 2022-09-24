import React from 'react';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import './Product.css'
import '../../Styles/Color.css'


const Product = ({ product }) => {
    const { img, type, logo, color, describe } = product;
    return (
        <div className="card">

            <img src={img} alt={type} />

            <div className="card-body">
                <h3 className="card-title">
                    {logo}<small className={`${color}`}>{type}</small>
                </h3>

                <p className='card-title'>{describe}</p>

                <span className=''>
                    <small className=''>Automate publishing workflows</small>
                    <BsFillArrowRightCircleFill className={`${color} arro`} />
                </span>
            </div>
        </div>
    );
};

export default Product;