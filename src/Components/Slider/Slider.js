import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import './Slider.css'

const Slider = () => {
    return (
        <>
            <div className='slider'>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    autoplay={{ delay: 5000 }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper swiper"
                >

                    <SwiperSlide className='slide' >
                        <img src='https://sociality.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-image-1.6dd28592.png&w=1080&q=100' alt='' />
                    </SwiperSlide>

                    <SwiperSlide className='slide'>
                        <img src='https://sociality.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-image-3.405b489f.png&w=1080&q=100' alt='' />
                    </SwiperSlide>
                    <SwiperSlide className='slide'>
                        <img src='https://sociality.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-image-2.874d228d.png&w=1080&q=100' alt='' />
                    </SwiperSlide>
                    <SwiperSlide className='slide'>
                        <img src='https://sociality.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-image-5.53401e6b.png&w=1080&q=100' alt='' />
                    </SwiperSlide>
                    <SwiperSlide className='slide'>
                        <img src='https://sociality.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-image-4.3865c0de.png&w=1080&q=100' alt='' />
                    </SwiperSlide>

                </Swiper>

            </div>
        </>

    );
};

export default Slider;