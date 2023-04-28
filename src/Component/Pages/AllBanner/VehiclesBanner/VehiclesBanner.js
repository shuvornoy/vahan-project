import React from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import vehicles from "../.../../../../../asete/banner/Vehicles.png";
import { Link } from "react-router-dom";

const VehiclesBanner = () => {
  return (
    <div>
      <img
        className="absolute w-full md:h-[230px] h-[140px]"
        src={vehicles}
        alt="img"
      />
      <div className="relative top-12 max-w-7xl mx-auto left-2 ">
        <h2 className="text-white md:text-[55px] text-[28px] interBold font-bold">
          Fuel Management
        </h2>
        <Link to="/" className="flex gap-1 items-center">
          <p className="text-[#F36E21]">
            <HiOutlineArrowNarrowLeft size={24} />
          </p>
          <p className="text-[#F36E21] text-[15px] interBold font-bold">
            Back to Homepage
          </p>
        </Link>
      </div>
    </div>
  );
};

export default VehiclesBanner;
