import React from "react";
import { TbArrowNarrowRight } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Vehicles = () => {
  
  return (
    <div>
      <NavLink
        className={`flex items-center ({ isActive }) => isActive ? "active" : undefined`}
        to="/main/fuel"
      >
        <div className="flex justify-between items-center xl:w-[418px] lg:w-[360px] md:w-[320px] xl:h-[70px] lg:h-[60px] md:h-[50px] h-[60px] px-6 rounded">
          <h2 className="xl:text-[25px] lg:text-[22px] md:text-[20px] text-[22px] font-semibold interBold">
            View All Vehicles
          </h2>
          <span className="text-[#F36E21]">
            <TbArrowNarrowRight size={28} />
          </span>
        </div>
      </NavLink>

      <NavLink
        className={`flex items-center ({ isActive }) => isActive ? "active" : undefined`}
        to="/main/management"
      >
        <div className="flex justify-between items-center xl:w-[418px] lg:w-[360px] md:w-[320px] xl:h-[70px] lg:h-[60px] md:h-[50px] h-[60px] px-6 rounded">
          <h2 className="xl:text-[25px] lg:text-[22px] md:text-[20px] text-[22px] font-semibold interBold">
            Add/Choose Vehicles
          </h2>
          <span className="text-[#F36E21]">
            <TbArrowNarrowRight size={28} />
          </span>
        </div>
      </NavLink>

      <NavLink
        className={`flex items-center ({ isActive }) => isActive ? "active" : undefined`}
        to="/main/log"
      >
        <div className="flex justify-between items-center xl:w-[418px] lg:w-[360px] md:w-[320px] xl:h-[70px] lg:h-[60px] md:h-[50px] h-[60px] px-6 rounded">
          <h2 className="xl:text-[25px] lg:text-[22px] md:text-[20px] text-[22px] font-semibold interBold">
            Add Fuel Log
          </h2>
          <span className="text-[#F36E21]">
            <TbArrowNarrowRight size={28} />
          </span>
        </div>
      </NavLink>

      <NavLink
        className={`flex items-center ({ isActive }) => isActive ? "active" : undefined`}
        to="/main/view"
      >
        <div className="flex justify-between items-center xl:w-[418px] lg:w-[360px] md:w-[320px] xl:h-[70px] lg:h-[60px] md:h-[50px] h-[60px] px-6 rounded">
          <h2 className="xl:text-[25px] lg:text-[22px] md:text-[20px] text-[22px] font-semibold interBold">
            View Fuel Log
          </h2>
          <span className="text-[#F36E21]">
            <TbArrowNarrowRight size={28} />
          </span>
        </div>
      </NavLink>
    </div>
  );
};

export default Vehicles;
