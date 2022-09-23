import React from 'react';
import companies from '../../../Datas/CompanyData';


const CompanyName = () => {
    return (
        <div className='flex gap-5 justify-around my-40 p-10'>
            {
                companies.map(company => (
                    <div
                        key={company.id}
                    >
                        <img className='rounded-xl' src={company.logo} alt="" />

                    </div>
                ))
            }
        </div>
    );
};

export default CompanyName;