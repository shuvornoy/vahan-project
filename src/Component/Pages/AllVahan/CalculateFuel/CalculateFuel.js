import React from "react";
import VahanBanner from "../../AllBanner/VahanBanner/VahanBanner";
import VahanManu from "../../SiteBar/VahanManu/VahanManu";
import { AiFillCaretUp, AiOutlineColumnHeight } from "react-icons/ai";
import { BiCaretDown } from "react-icons/bi";
import { Link } from "react-router-dom";

const CalculateFuel = () => {
  return (
    <div>
      <VahanBanner />
      <div className="mb-14 md:mt-[170px] mt-[100px] block md:flex justify-between items-baseline gap-4 max-w-7xl mx-auto xl:px-0 px-2">
        <VahanManu />

        <div className="xl:w-[800px] lg:w-[570px] md:w-[420px] w-full shadow-2xl bg-base-100 xl:px-16 lg:p-12 md:p-8 p-4">
          <h2 className="lg:text-[42px] md:text-[30px] text-[28px] font-semibold interBold">
            Calculate Fuel
          </h2>

          <div className=" rounded-lg mt-8">
            <h2 className="text-[16px] font-semibold interSemi my-2">From</h2>
            <div className="flex justify-between items-center rounded bg-[#F2F2F2] h-[60px] lg:px-[50px] px-4 lg:text-[24px] md:text-[20px] text[16px] interBold font-bold">
              <h2>Mumbai, India</h2>
              <h3>
                <AiFillCaretUp />
              </h3>
            </div>
          </div>

          <div className=" rounded-lg mt-8">
            <h2 className="text-[16px] font-semibold interSemi my-2">To</h2>
            <div className="flex justify-between items-center rounded bg-[#F2F2F2] h-[60px] lg:px-[50px] px-4 lg:text-[24px] md:text-[20px] text[16px] interBold font-bold">
              <h2>Dehli, India</h2>
              <h3>
                <AiFillCaretUp />
              </h3>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center text-[24px] my-6">
              <h2 className="font-bold interBold">Fuel Calculator</h2>
              <h3>
                <AiFillCaretUp />
              </h3>
            </div>
            <hr />

            <div className="flex justify-between items-center md:text-[16px] text-[14px] mt-6">
              <div className="flex items-center gap-2">
                <span>
                  <AiOutlineColumnHeight />
                </span>
                <h2 className="font-semibold interSemi">Distance</h2>
              </div>
              <div className="flex items-center gap-2">
                <h2 className="sansReg">600 km</h2>
                <span>
                  <BiCaretDown />
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center md:text-[16px] text-[14px] mt-6">
              <div className="flex items-center gap-2">
                <span>
                  <AiOutlineColumnHeight />
                </span>
                <h2 className="font-semibold interSemi">
                  Cos of Fuel Per Litre
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <h2 className="sansReg">78 INR</h2>
                <span>
                  <BiCaretDown />
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center md:text-[16px] text-[14px] mt-6">
              <div className="flex items-center gap-2">
                <span>
                  <AiOutlineColumnHeight />
                </span>
                <h2 className="font-semibold interSemi">
                  Fuel Usage Per 100 km
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <h2 className="sansReg">10 l</h2>
                <span>
                  <BiCaretDown />
                </span>
              </div>
            </div>

            <p className="text-end text-[#F36E21] text-[14px] font-semibold my-4">
              CALCULATE
            </p>
          </div>
          <div>
            <div className="flex justify-between items-center text-[18px]">
              <h2 className="font-bold interSemi">Total Trip Cost</h2>
              <h3 className="sansReg">4,680 INR</h3>
            </div>
          </div>

          <Link to="/">
            <button className="btn bg-[#F36E21] w-full mt-6 border-none sansBold font-bold text-[18px]">
              BACK TO HOMEPAGE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CalculateFuel;
