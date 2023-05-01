import React from "react";
import Vehicles from "../../SiteBar/Vehicles/Vehicles";
import VehiclesBanners from "../../AllBanner/VehiclesBanner/VehiclesBanners";
import { AiFillCaretUp, AiOutlineEnvironment } from "react-icons/ai";

import "./ViewLog.css";

const ViewLog = () => {
  return (
    <div>
      <VehiclesBanners />
      <div className="mb-14 md:mt-[170px] mt-[100px] block md:flex justify-between items-baseline gap-4 max-w-7xl mx-auto xl:px-0 px-2">
        <Vehicles />

        <div className="xl:w-[800px] lg:w-[570px] w-full bg-base-100 shadow-2xl xl:px-16 lg:p-12 md:p-8 p-4">
          <h2 className="lg:text-[42px] md:text-[30px] text-[28px] font-semibold">
            View Fuel Logs
          </h2>

          <div className="bg-base-100 shadow-xl rounded-lg mt-8">
            <div className="flex justify-between items-center rounded-t-lg bg-[#1B2551] text-white h-[60px] lg:px-[50px] px-4 lg:text-[24px] md:text-[20px] text[16px]">
              <h2>Choose Car to View Log</h2>
              <h3>
                <AiFillCaretUp />
              </h3>
            </div>
            <div className="flex justify-between items-center lg:px-[50px] px-4 text-[14px] font-medium my-4">
              <div>
                <h2 className="md:text-[18px] text[16px]  font-semibold">
                  Car Name Goes Here
                </h2>
                <span className="md:text-[16px] text-[14px] font-medium">
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
            <div className="flex justify-between items-center lg:px-[50px] px-4 text-[14px] font-medium my-4">
              <div>
                <h2 className="md:text-[18px] text[16px]  font-semibold">
                  Car Name Goes Here
                </h2>
                <span className="md:text-[16px] text-[14px] font-medium">
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
          <div className="flex mt-16">
            <div className="">
              <div className="w-[2px] h-[440px] bg-[#000] absolute "></div>
              <div className="w-5 h-5 bg-[#F36E21] rounded-[50px] ml-[-9px] relative"></div>
              <div className="w-5 h-5 bg-[#F36E21] rounded-[50px] mt-16  ml-[-9px] relative"></div>
              <div className="w-5 h-5 bg-[#F36E21] rounded-[50px] mt-16  ml-[-9px] relative"></div>
              <div className="w-5 h-5 bg-[#F36E21] rounded-[50px] mt-16  ml-[-9px] relative"></div>
              <div className="w-5 h-5 bg-[#F36E21] rounded-[50px] mt-16  ml-[-9px] relative"></div>
            </div>
            <div className="h-[440px] w-[100%]">
              <div className="ml-11">
                <div className="mt-[-6px]  md:flex md:justify-between block ">
                  <div className="">
                    <h3 className="md:text-[20px] text-[16px] font-[600] text-[#000]">
                      Date Month, Year
                    </h3>
                    <p className="text-[12px] lg:text-[16px] md:text-[10px] font-[400] text-[#000]">
                      24 Liters Diseal | Price: 79.5 INR
                    </p>
                    <p className="text-[12px] font-[400] text-[#A1A1A1]">
                      Odo Meter Reading: 458923
                    </p>
                  </div>
                  <div className="flex mt-2">
                    <span>
                      {" "}
                      <AiOutlineEnvironment className="h-[20px]" />{" "}
                    </span>
                    <p className="text-[12px] font-[400] ml-1">
                      Pump Name, 123, XYZ{" "}
                    </p>
                  </div>
                </div>
                <div className="lg:mt-3 md:mt-5 mt-0 md:flex md:justify-between block ">
                  <div className="">
                    <h3 className="md:text-[20px] text-[16px] font-[600] text-[#000]">
                      Date Month, Year
                    </h3>
                    <p className="text-[12px] lg:text-[16px] md:text-[10px] font-[400] text-[#000]">
                      24 Liters Diseal | Price: 79.5 INR
                    </p>
                    <p className="text-[12px] font-[400] text-[#A1A1A1]">
                      Odo Meter Reading: 458923
                    </p>
                  </div>
                  <div className="flex mt-2">
                    <span>
                      {" "}
                      <AiOutlineEnvironment className="h-[20px]" />{" "}
                    </span>
                    <p className="text-[12px] font-[400] ml-1">
                      Pump Name, 123, XYZ{" "}
                    </p>
                  </div>
                </div>
                <div className="lg:mt-3 md:mt-5 mt-0 md:flex md:justify-between block  ">
                  <div className="">
                    <h3 className="md:text-[20px] text-[16px] font-[600] text-[#000]">
                      Date Month, Year
                    </h3>
                    <p className="text-[12px] lg:text-[16px] md:text-[10px] font-[400] text-[#000]">
                      24 Liters Diseal | Price: 79.5 INR
                    </p>
                    <p className="text-[12px] font-[400] text-[#A1A1A1]">
                      Odo Meter Reading: 458923
                    </p>
                  </div>
                  <div className="flex mt-2">
                    <span>
                      {" "}
                      <AiOutlineEnvironment className="h-[20px]" />{" "}
                    </span>
                    <p className="text-[12px] font-[400] ml-1">
                      Pump Name, 123, XYZ{" "}
                    </p>
                  </div>
                </div>
                <div className="lg:mt-3 md:mt-5 mt-0 md:flex md:justify-between block  ">
                  <div className="">
                    <h3 className="md:text-[20px] text-[16px] font-[600] text-[#000]">
                      Date Month, Year
                    </h3>
                    <p className="text-[12px] lg:text-[16px] md:text-[10px] font-[400] text-[#000]">
                      24 Liters Diseal | Price: 79.5 INR
                    </p>
                    <p className="text-[12px] font-[400] text-[#A1A1A1]">
                      Odo Meter Reading: 458923
                    </p>
                  </div>
                  <div className="flex mt-2">
                    <span>
                      {" "}
                      <AiOutlineEnvironment className="h-[20px]" />{" "}
                    </span>
                    <p className="text-[12px] font-[400] ml-1">
                      Pump Name, 123, XYZ{" "}
                    </p>
                  </div>
                </div>
                <div className="lg:mt-3 md:mt-5 mt-0 md:flex md:justify-between block  ">
                  <div className="">
                    <h3 className="md:text-[20px] text-[16px] font-[600] text-[#000]">
                      Date Month, Year
                    </h3>
                    <p className="text-[12px] lg:text-[16px] md:text-[10px] font-[400] text-[#000]">
                      24 Liters Diseal | Price: 79.5 INR
                    </p>
                    <p className="text-[12px] font-[400] text-[#A1A1A1]">
                      Odo Meter Reading: 458923
                    </p>
                  </div>
                  <div className="flex mt-2">
                    <span>
                      {" "}
                      <AiOutlineEnvironment className="h-[20px]" />{" "}
                    </span>
                    <p className="text-[12px] font-[400] ml-1">
                      Pump Name, 123, XYZ{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="btn bg-[#F36E21] w-full mt-6 border-none">
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewLog;
