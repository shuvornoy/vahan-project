import React from "react";
import car from "../.../../../../asete/product/image 9.png";
import { TbArrowNarrowRight } from "react-icons/tb";
import { Link } from "react-router-dom";
import BannerSmoll from "../../BannerSmoll/BannerSmoll";


const YourPackage = () => {
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
          <h2 className="text-[42px] font-semibold">Choose Your Package</h2>
          <p className="text-[18px] font-medium mb-8">
            Pick The Plan that’s Right For You!
          </p>
          <div className="bg-base-100 shadow-xl rounded-lg">
            <div className="flex justify-between items-center rounded-t-lg bg-[#1B2551] text-white h-[60px] px-[50px] text-[24px]">
              <h2>
                <span className="font-bold">Bronze</span> Package
              </h2>
              <h3>
                <span className="font-bold">349</span> INR
              </h3>
            </div>
            <div className="flex justify-between items-center px-[50px] text-[14px] font-medium my-4">
              <h2>Package Includes:</h2>
              <h3>Daily Car Wash</h3>
            </div>
            <div className="px-[50px] pb-4">
              <button className="w-full text-center text-[#F36E21] border border-[#F36E21] rounded-lg py-2 ">
                Select This Plan
              </button>
            </div>
          </div>

          <div className="bg-base-100 shadow-xl rounded-lg mt-6">
            <div className="flex justify-between items-center rounded-t-lg bg-[#1B2551] text-white h-[60px] px-[50px] text-[24px]">
              <h2>
                <span className="font-bold">Bronze</span> Package
              </h2>
              <h3>
                <span className="font-bold">349</span> INR
              </h3>
            </div>
            <div className="flex justify-between items-center px-[50px] text-[14px] font-medium my-4">
              <h2>Package Includes:</h2>
              <h3>Daily Car Wash</h3>
            </div>
            <div className="px-[50px] pb-4">
              <button className="w-full text-center text-[#F36E21] border border-[#F36E21] rounded-lg py-2 ">
                Select This Plan
              </button>
            </div>
          </div>

          <button className="btn bg-[#F36E21] w-full mt-6">CONTINUE</button>
        </div>
      </div>
    </div>
  );
};

export default YourPackage;
