import React from 'react';
import Product from '../../../Components/Product/Product';
import products from '../../../Datas/ProductsData'

const Products = () => {
    return (
        <>
            <h1 className='text-2xl lg:text-5xl text-center font-bold'>Social media management <br /><span className='rounded-md border-b-4 border-secondary'>solutions built for scale</span></h1>
            <div className='grid grid-cols-1 justify-center md:grid-cols-2 lg:grid-cols-3 px-5 lg:px-20 mt-10 lg:mt-20 gap-10'>
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
        </>
    );
};

export default Products;