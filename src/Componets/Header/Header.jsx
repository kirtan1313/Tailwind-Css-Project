import React, { useState } from 'react';
import Logo from '../../assets/Images/logo.webp';
import { IoMdArrowDropdown } from 'react-icons/io';
import { IoSearchOutline } from 'react-icons/io5';
import './Header.css';
import { BsCart3 } from 'react-icons/bs';
import { FaRegHeart, FaRegUserCircle } from 'react-icons/fa';
import { Link, Links } from 'react-router';

function Header() {
    const [showSearchModal, setShowSearchModal] = useState(false);

    const handleClick = () => {
        setShowSearchModal(true);

    };

    const handleClose = () => {
        setShowSearchModal(false);
    };

    return (
        <>
            {/* Header Section */}
            <div className="flex-wrap xl:flex justify-between items-center px-[10px] md:px-[20px] lg:px-[40px] py-3 xl:border xl:border-b-gray-300">
                <div className="logo w-30 hidden xl:block">
                    <img src={Logo} alt="logo" className="w-100" />
                </div>
                <div className="flex justify-between items-center delivery cursor-pointer " onClick={handleClick}>
                    <div>
                        <p className="font-bold text-[18px]">Delivery in 8 minutes</p>
                        <div className="flex items-center">
                            <p className="text-[12px]">Varachha, Surat, Gujarat, India</p>
                            <p className="ps-1 text-[20px]">
                                <IoMdArrowDropdown />
                            </p>
                        </div>
                    </div>
                    <Link className='block xl:hidden text-3xl' to={'/user'}>
                        <FaRegUserCircle />
                    </Link>
                </div>
                <div
                    className="mt-3 xl:mt-0 search flex items-center bg-[rgba(248,248,248)] w-[100%]  xl:w-180 p-4 rounded-xl cursor-pointer"

                >
                    <p className="text-[22px]">
                        <IoSearchOutline />
                    </p>
                    <input
                        type="text"
                        placeholder="Search for food"
                        className="outline-none ps-3 bg-transparent"
                    />
                </div>
                <div className="login gap-3 hidden xl:flex">
                    <Link to={'/cart'} className="bg-[#e9c46a] w-11 h-11 rounded-full flex justify-center items-center hover:bg-[#64B946] transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg">
                        <BsCart3 className="text-white text-[24px]" />
                    </Link>
                    {/* <p className="bg-[#e9c46a] w-11 h-11 rounded-full flex justify-center items-center hover:bg-[#64B946] transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg">
                        <FaRegHeart className="text-white text-[24px]" />
                    </p> */}
                </div>
            </div>

            {/* Modal Section */}
            {showSearchModal && (
                <div className="fixed hidden  inset-0 bg-[rgba(0,0,0,0.5)] z-50 xl:flex items-center justify-center">
                    <div className="bg-[#F4F6FC] p-6 rounded-lg w-[600px] top-[110px] left-[210px]">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-bold">Change Location</h2>
                            <button
                                onClick={handleClose}
                                className="text-gray-500 text-xl"
                            >
                                &times;
                            </button>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
                                Detect my location
                            </button>
                            <span className="text-gray-400">OR</span>
                            <input
                                type="text"
                                placeholder="Search delivery location"
                                className="border border-gray-300 px-4 py-2 rounded-lg flex-1"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;
