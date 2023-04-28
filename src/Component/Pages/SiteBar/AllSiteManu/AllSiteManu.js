import React from 'react';
import { TbArrowNarrowRight } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const AllSiteManu = () => {

   
    return (
      <div>
        <NavLink
          className={`flex items-center ({ isActive }) => isActive ? "active" : undefined`}
          to="/wash"
        >
          <div className="flex justify-between items-center xl:w-[418px] lg:w-[360px] md:w-[320px] xl:h-[70px] lg:h-[60px] md:h-[50px] h-[60px] px-6 rounded ">
            <h2 className="xl:text-[25px] lg:text-[22px] md:text-[20px] text-[22px] font-semibold">
              Add Your Car
            </h2>
            <span className="text-[#F36E21]">
              <TbArrowNarrowRight size={28} />
            </span>
          </div>
        </NavLink>

        <NavLink
          className={`flex items-center ({ isActive }) => isActive ? "active" : undefined`}
          to="/package"
        >
          <div className="flex justify-between items-center xl:w-[418px] lg:w-[360px] md:w-[320px] xl:h-[70px] lg:h-[60px] md:h-[50px] h-[60px] px-6 rounded">
            <h2 className="xl:text-[25px] lg:text-[22px] md:text-[20px] text-[22px] font-semibold">
              Choose Your Package
            </h2>
            <span className="text-[#F36E21]">
              <TbArrowNarrowRight size={28} />
            </span>
          </div>
        </NavLink>

        <NavLink
          className={`flex items-center ({ isActive }) => isActive ? "active" : undefined`}
          to="/schedule"
        >
          <div className="flex justify-between items-center xl:w-[418px] lg:w-[360px] md:w-[320px] xl:h-[70px] lg:h-[60px] md:h-[50px] h-[60px] px-6 rounded">
            <h2 className="xl:text-[25px] lg:text-[22px] md:text-[20px] text-[22px] font-semibold">
              Sceudual Car Wash
            </h2>
            <span className="text-[#F36E21]">
              <TbArrowNarrowRight size={28} />
            </span>
          </div>
        </NavLink>

        <NavLink
          className={`flex items-center ({ isActive }) => isActive ? "active" : undefined`}
          to="/order"
        >
          <div className="flex justify-between items-center xl:w-[418px] lg:w-[360px] md:w-[320px] xl:h-[70px] lg:h-[60px] md:h-[50px] h-[60px] px-6 rounded">
            <h2 className="xl:text-[25px] lg:text-[22px] md:text-[20px] text-[22px] font-semibold">
              Order Summary
            </h2>
            <span className="text-[#F36E21]">
              <TbArrowNarrowRight size={28} />
            </span>
          </div>
        </NavLink>

        <NavLink
          className={`flex items-center ({ isActive }) => isActive ? "active" : undefined`}
          to="/subscriptions"
        >
          <div className="flex justify-between items-center xl:w-[418px] lg:w-[360px] md:w-[320px] xl:h-[70px] lg:h-[60px] md:h-[50px] h-[60px] px-6 rounded">
            <h2 className="xl:text-[25px] lg:text-[22px] md:text-[20px] text-[22px] font-semibold">
              Your Subscriptions
            </h2>
            <span className="text-[#F36E21]">
              <TbArrowNarrowRight size={28} />
            </span>
          </div>
        </NavLink>
      </div>
    );
};

export default AllSiteManu;