import React from 'react';
import car from '../.../../../asete/product/image 9.png';
import { TbArrowNarrowRight } from "react-icons/tb";
import { Link } from 'react-router-dom';
import BannerSmoll from '../BannerSmoll/BannerSmoll';



const Product = () => {
    return (
      <div>
        <BannerSmoll />
        <div className="mb-14 mt-[170px] flex justify-center items-center gap-4 max-w-screen-xl mx-auto">
          <div>
            <div className="flex justify-between items-center w-[418px] h-[70px] bg-[#E9E9EA] px-6 rounded">
              <h2 className="text-[25px] font-semibold">Add Your Car</h2>
              <Link className="text-[#F36E21]">
                <TbArrowNarrowRight size={28} />
              </Link>
            </div>
            <div className="flex justify-between items-center w-[418px] h-[70px] bg-[#E9E9EA] my-4 px-6 rounded">
              <h2 className="text-[25px] font-semibold">Choose Your Package</h2>
              <Link to="/package" className="text-[#F36E21]">
                <TbArrowNarrowRight size={28} />
              </Link>
            </div>
            <div className="flex justify-between items-center w-[418px] h-[70px] bg-[#E9E9EA] px-6 rounded">
              <h2 className="text-[25px] font-semibold">Sceudual Car Wash</h2>
              <Link className="text-[#F36E21]">
                <TbArrowNarrowRight size={28} />
              </Link>
            </div>
            <div className="flex justify-between items-center w-[418px] h-[70px] bg-[#E9E9EA] my-4 px-6 rounded">
              <h2 className="text-[25px] font-semibold">Order Summary</h2>
              <Link className="text-[#F36E21]">
                <TbArrowNarrowRight size={28} />
              </Link>
            </div>
            <div className="flex justify-between items-center w-[418px] h-[70px] bg-[#E9E9EA] px-6 rounded">
              <h2 className="text-[25px] font-semibold">Your Subscriptions</h2>
              <Link className="text-[#F36E21]">
                <TbArrowNarrowRight size={28} />
              </Link>
            </div>
          </div>

          <div className="w-[860px] shadow-xl bg-base-100 p-16">
            <h2 className="text-[42px] font-semibold">Add Your Car</h2>
            <div className="flex justify-start gap-4 my-8">
              <div className="w-full">
                <p>Car Name/Company</p>
                <hr className="mt-2" />
              </div>
              <div className="w-full">
                <p>Car Name/Company</p>
                <hr className="mt-2" />
              </div>
            </div>
            <img className="w-full" src={car} alt="" />
            <p className="mt-5 text-end text-[14px] font-bold text-[#F36E21]">
              UPLOAD YOUR CAR IMAGE
            </p>
            <button className="btn bg-[#F36E21] w-full mt-6">CONTINUE</button>
          </div>
        </div>
      </div>
    );
};

export default Product;