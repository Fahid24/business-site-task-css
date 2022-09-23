import React from 'react';
import { BsFillChatDotsFill } from 'react-icons/bs';
import Navbar from '../../Components/Navbar/Navbar';
import Slider from '../../Components/Slider/Slider';
import CompanyName from './CompanyName/CompanyName';
import Contact from './Contact/Contact';
import Introduction from './Introduction/Introduction';
import Package from './Package/Package';
import Products from './Products/Products';
import Service from './Service/Service';



const Home = () => {
    return (
        <>
            <Navbar />
            <Introduction />
            <Slider />
            <CompanyName />
            <Products />
            <Package />
            <Service />
            <Contact />

            {/* sticky chat bar */}
            <div className='sticky right-0 bottom-0 flex justify-end'>
                <BsFillChatDotsFill className='w-40 text-6xl text-accent my-10' />
            </div>

        </>
    );
};

export default Home;