import React from "react";
import Vehicles from "../../SiteBar/Vehicles/Vehicles";
import VehiclesBanners from "../../AllBanner/VehiclesBanner/VehiclesBanners";
import { AiFillCaretUp, AiOutlineColumnHeight } from "react-icons/ai";
import { BiCaretDown } from "react-icons/bi";

const FuelLog = () => {
  return (
    <div>
      <VehiclesBanners />
      <div className="mb-14 md:mt-[170px] mt-[100px] block md:flex justify-between items-baseline gap-4 max-w-7xl mx-auto xl:px-0 px-2">
        <Vehicles />

        <div className="xl:w-[800px] lg:w-[570px] w-full shadow-2xl bg-base-100 xl:px-16 lg:p-12 md:p-8 p-4">
          <h2 className="lg:text-[42px] md:text-[30px] text-[28px] font-semibold interSemi">
            Add Fuel Log
          </h2>

          <div className="bg-base-100 shadow-xl rounded-lg mt-8">
            <div className="flex justify-between items-center rounded-t-lg bg-[#1B2551] text-white h-[60px] lg:px-[50px] px-4 lg:text-[24px] md:text-[20px] text[16px] sansReg font-semibold">
              <h2>Choose Car For Refueling</h2>
              <h3>
                <AiFillCaretUp />
              </h3>
            </div>
            <div className="flex justify-between items-center lg:px-[50px] px-4 text-[14px] font-medium my-4">
              <div>
                <h2 className="md:text-[18px] text[16px]  font-semibold sansReg">
                  Car Name Goes Here
                </h2>
                <span className="md:text-[16px] text-[14px] font-medium sansReg">
                  Car Model
                </span>
              </div>
              <input
                type="radio"
                name="radio-8"
                className="radio radio-error"
                checked
              />
            </div>
            <div className="flex justify-between items-center lg:px-[50px] px-4 pb-4 text-[14px] font-medium">
              <div>
                <h2 className="md:text-[18px] text[16px] font-semibold sansReg">
                  Car Name Goes Here
                </h2>
                <span className="md:text-[16px] text-[14px] font-medium sansReg">
                  Car Model
                </span>
              </div>
              <input
                type="radio"
                name="radio-8"
                className="radio radio-error"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center text-[24px] my-6">
              <h2 className="font-bold interBold">Fuel Details</h2>
              <h3>
                <AiFillCaretUp />
              </h3>
            </div>
            <hr />

            <div className="flex justify-between items-center  md:text-[16px] text-[14px] mt-6">
              <div className="flex items-center gap-2">
                <span>
                  <AiOutlineColumnHeight />
                </span>
                <h2 className="font-semibold sansReg">Odo Counter (KM)</h2>
              </div>
              <div className="flex items-center gap-2">
                <h2 className="sansReg ">012345678</h2>
                <span>
                  <BiCaretDown />
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center  md:text-[16px] text-[14px] mt-6">
              <div className="flex items-center gap-2">
                <span>
                  <AiOutlineColumnHeight />
                </span>
                <h2 className="font-semibold sansReg">Fuel Type</h2>
              </div>
              <div className="flex items-center gap-2">
                <h2 className="sansReg ">Diseal</h2>
                <span>
                  <BiCaretDown />
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center  md:text-[16px] text-[14px] mt-6">
              <div className="flex items-center gap-2">
                <span>
                  <AiOutlineColumnHeight />
                </span>
                <h2 className="font-semibold sansReg">No. of Liters</h2>
              </div>
              <div className="flex items-center gap-2">
                <h2 className="sansReg ">012345678</h2>
                <span>
                  <BiCaretDown />
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center  md:text-[16px] text-[14px] mt-6">
              <div className="flex items-center gap-2">
                <span>
                  <AiOutlineColumnHeight />
                </span>
                <h2 className="font-semibold sansReg">Price/L</h2>
              </div>
              <div className="flex items-center gap-2">
                <h2 className="sansReg ">245 INR</h2>
                <span>
                  <BiCaretDown />
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center  md:text-[16px] text-[14px] mt-6">
              <div className="flex items-center gap-2">
                <span>
                  <AiOutlineColumnHeight />
                </span>
                <h2 className="font-semibold sansReg">Date</h2>
              </div>
              <div className="flex items-center gap-2">
                <h2 className="sansReg ">245 INR</h2>
                <span>
                  <BiCaretDown />
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center text-[24px] my-6">
              <h2 className="font-bold">Car Optional Details</h2>
              <h3>
                <AiFillCaretUp />
              </h3>
            </div>
            <hr />
            <p className="mt-6">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
          </div>

          <button className="btn bg-[#F36E21] w-full mt-6 border-none sansBold font-bold text-[18px]">
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
};

export default FuelLog;
