import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./blagsSwiper.css";

// import required modules
import { Pagination } from "swiper";

export default function BlogsSwiper({ images }) {
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >

                {
                    images.map(image => <SwiperSlide>
                        <img src={image} alt="" />
                    </SwiperSlide>)
                }

            </Swiper>
        </>
    );
}
