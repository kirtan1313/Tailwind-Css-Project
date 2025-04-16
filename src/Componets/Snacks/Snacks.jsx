import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import SnacksProduct from '../../../Snacks.js';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { CiStopwatch } from "react-icons/ci";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Snacks({setSnackProdctId}) {

    const handleSnacksId=(id)=>{
        setSnackProdctId(id)
        console.log('snackId',id);
        
    }

    return (
        <div className="max-w-screen-xl mx-auto px-4">
            {/* Section Header */}
            <div className="font-bold text-[20px] md:text-[24px] pt-8 pb-4 flex justify-between items-center">
                <span>Snacks & Munchies</span>
                {/* Custom navigation buttons */}
                <div className="flex gap-4">
                    <button
                        id="p-btn-1"
                        className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow hover:shadow-md"
                    >
                        <IoIosArrowBack className="text-gray-600" />
                    </button>
                    <button
                        id="n-btn-2"
                        className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow hover:shadow-md"
                    >
                        <IoIosArrowForward className="text-gray-600" />
                    </button>
                </div>
            </div>

            {/* Swiper Component */}
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={1} // Default for extra-small screens
                navigation={{
                    prevEl: '#p-btn-1', // Link custom prev button
                    nextEl: '#n-btn-2', // Link custom next button
                }}
                breakpoints={{
                    380: { slidesPerView: 2, spaceBetween: 15 }, // 2 cards for extra-small screens
                    640: { slidesPerView: 3, spaceBetween: 15 }, // Small screens
                    768: { slidesPerView: 4, spaceBetween: 20 }, // Medium screens
                    1024: { slidesPerView: 5, spaceBetween: 25 }, // Large screens
                    1280: { slidesPerView: 6, spaceBetween: 30 }, // Extra-large screens
                }}
            >
                {SnacksProduct.map((item, index) => (
                    <SwiperSlide >
                        <div key={index} className="w-full h-80 border border-gray-300 rounded-2xl p-3 bg-white transition-transform ">
                            {/* Product Image */}
                            <div className="dairy-img w-full">
                                <img
                                    src={item.img}
                                    alt="category"
                                    className="w-full h-32 object-cover rounded-lg"
                                />
                            </div>
                            {/* Delivery Time */}
                            <div className="min font-bold flex items-center bg-[rgba(248,248,248)] w-16 rounded text-[10px] mt-2 px-2 py-1">
                                <CiStopwatch className="mr-1" />
                                30 Min
                            </div>
                            {/* Product Title */}
                            <div className="title pt-2 font-bold text-[14px] h-12 line-clamp-2">
                                {item.title}
                            </div>
                            {/* Product Description */}
                            <div className="dec text-gray-500 text-[12px] line-clamp-2 pt-2">
                                {item.dec}
                            </div>
                            {/* Price and Add Button */}
                            <div className="flex pt-4 justify-between items-center">
                                <div className="price font-bold text-[14px] text-gray-700">
                                    ₹{item.price}
                                </div>
                                <button onClick={()=>handleSnacksId(item.id)} className="bg-green-100 cursor-pointer text-green-600 py-1 px-4 rounded-lg border border-green-400 hover:bg-green-200">
                                    Add
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
