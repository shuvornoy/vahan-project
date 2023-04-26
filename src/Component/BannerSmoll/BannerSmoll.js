import React from 'react';
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import productBanner from "../.../../../asete/product/image 10.png";
import { Link } from 'react-router-dom';

const BannerSmoll = () => {
    return (
      <div>
        <img className="absolute h-[230px]" src={productBanner} alt="" />
        <div className="relative top-12 max-w-screen-xl mx-auto">
          <h2 className="text-white text-[55px] font-bold">Car Wash</h2>
          <Link to="/" className="flex gap-1 items-center">
            <p className="text-[#F36E21]">
              <HiOutlineArrowNarrowLeft size={24} />
            </p>
            <p className="text-[#F36E21] text-[15px]">Back to Homepage</p>
          </Link>
        </div>
      </div>
    );
};

export default BannerSmoll;