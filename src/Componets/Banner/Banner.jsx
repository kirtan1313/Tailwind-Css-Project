import React from "react";
import BannerImg from "../../assets/Images/Group-33704.webp";
import Android from "../../assets/Images/android.png";
import pharmacy from "../../assets/Images/pharmacy.avif";
import PetCare from "../../assets/Images/Pet-Care.avif";
import babycare from "../../assets/Images/babycare.jpg";
import Data from "../../../data.js";

function Banner() {
    // console.log("img", Android);

    return (
        <>
            <div className="max-w-screen-xl mx-auto px-4">
                {/* Desktop Banner */}
                <div className="hidden xl:block">
                    <img src={BannerImg} alt="banner" className="w-full" />
                </div>

                {/* Mobile Banner */}
                <div className="block xl:hidden">
                    <img src={Android} alt="banner" className="w-full sm:w-[85%] md:w-[100%] mx-auto" />
                </div>

                {/* Category Images (Static) */}
                <div className="grid grid-cols-3 gap-4 w-full pt-4">
                    <div>
                        <img
                            src={pharmacy}
                            alt="pharmacy"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                    <div>
                        <img
                            src={PetCare}
                            alt="PetCare"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                    <div>
                        <img
                            src={babycare}
                            alt="babycare"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                </div>

                {/* Dynamic Categories */}
                <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-1 xl:gap1-4 pt-6">
                    {Data.map((item, index) => (
                        <img
                            src={item.imgs}
                            alt="category"
                            key={index}
                            className="w-full h-auto object-cover rounded-lg transform transition-transform duration-300 hover:scale-110"
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Banner;
