import React from "react";
import { TbArrowNarrowRight } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const VahanManu = () => {
  return (
    <div>
      <NavLink
        className={`flex items-center ({ isActive }) => isActive ? "active" : undefined`}
        to="/main/choose"
      >
        <div className="flex justify-between items-center xl:w-[418px] lg:w-[360px] md:w-[320px] xl:h-[70px] lg:h-[60px] md:h-[50px] h-[60px] px-6 rounded">
          <h2 className="xl:text-[25px] lg:text-[22px] md:text-[20px] text-[22px] font-semibold interBold">
            Choose/Add Vehicle
          </h2>
          <span className="text-[#F36E21]">
            <TbArrowNarrowRight size={28} />
          </span>
        </div>
      </NavLink>

      <NavLink
        className={`flex items-center ({ isActive }) => isActive ? "active" : undefined`}
        to="/main/add"
      >
        <div className="flex justify-between items-center xl:w-[418px] lg:w-[360px] md:w-[320px] xl:h-[70px] lg:h-[60px] md:h-[50px] h-[60px] px-6 rounded">
          <h2 className="xl:text-[25px] lg:text-[22px] md:text-[20px] text-[22px] font-semibold interBold">
            Add Vehicle
          </h2>
          <span className="text-[#F36E21]">
            <TbArrowNarrowRight size={28} />
          </span>
        </div>
      </NavLink>

      <NavLink
        className={`flex items-center ({ isActive }) => isActive ? "active" : undefined`}
        to="/main/calculate"
      >
        <div className="flex justify-between items-center xl:w-[418px] lg:w-[360px] md:w-[320px] xl:h-[70px] lg:h-[60px] md:h-[50px] h-[60px] px-6 rounded">
          <h2 className="xl:text-[25px] lg:text-[22px] md:text-[20px] text-[22px] font-semibold interBold">
            Calculate Fuel
          </h2>
          <span className="text-[#F36E21]">
            <TbArrowNarrowRight size={28} />
          </span>
        </div>
      </NavLink>
    </div>
  );
};

export default VahanManu;
