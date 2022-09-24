import React from 'react';
import Product from '../../../Components/Product/Product';
import products from '../../../Datas/ProductsData';
import './Products.css'

const Products = () => {
    return (
        <div className='card-section'>
            <h1 className='title'>Social media management <br /><span className='rounded-md border-b-4 border-secondary'>solutions built for scale</span></h1>
            <div className='grid product grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 px-5 lg:px-20 mt-10 lg:mt-20 gap-10'>
                {
                    products.map(product => (
                        <Product
                            key={product.id}
                            product={product}
                        >

                        </Product>
                    ))
                }
            </div>
        </div>
    );
};

export default Products;