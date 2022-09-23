import React from 'react';
import services from '../../../Datas/ServiceData';

const Service = () => {
    return (
        <div className='px-10 gap-10'>
            <h1 className='text-2xl lg:text-5xl text-center font-bold'><span className='rounded-md border-b-4 border-secondary '>Dedicated support. Always at your service.</span></h1>
            <p className='lg:text-center text-2xl my-5'>Questions? From creating tailored onboarding or pricing plans to streamlining < br /> your social media management workflows and expert guidance, we’ll work with <br /> you on every step of the journey.</p>
            <div className='lg:flex mt-12 gap-5'>
                {
                    services.map(service => (
                        <div
                            className='text-center flex flex-col mb-20 lg:px-[30px] items-center'
                            key={service.id}
                        >
                            <p className='text-5xl font-semibold bg-secondary rounded-full text-gray-700'>{service.logo}</p>
                            <h3 className='font-semibold text-xl'>{service.name}</h3>
                            <p className=''>{service.describe}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default Service;