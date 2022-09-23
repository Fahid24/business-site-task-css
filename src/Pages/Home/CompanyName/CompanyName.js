import React from 'react';
import companies from '../../../Datas/CompanyData';
import Button from '../../../Components/Share/Button/Button';
import './CompanyName.css'


const CompanyName = () => {
    return (
        <div className='company'>
            <Button kye={2} btn='btn-lg' text='Start your free trial ' />

            <div className=''>
                {
                    companies.map(company => (
                        <div
                            key={company.id}
                        >
                            <img className='' src={company.logo} alt="" />

                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default CompanyName;