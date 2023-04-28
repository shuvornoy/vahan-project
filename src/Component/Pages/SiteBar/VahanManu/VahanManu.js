import React from "react";
import { TbArrowNarrowRight } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";

const VahanManu = () => {
  return (
    <div>
      <NavLink
        className={`flex items-center ({ isActive }) => isActive ? "active" : undefined`}
        to="/choose"
      >
        <div className="flex justify-between items-center xl:w-[418px] lg:w-[360px] md:w-[320px] xl:h-[70px] lg:h-[60px] md:h-[50px] h-[60px] hover:bg-[#E9E9EA] px-6 rounded">
          <h2 className="xl:text-[25px] lg:text-[22px] md:text-[20px] text-[22px] font-semibold">
            Choose/Add Vehicle
          </h2>
          <span className="text-[#F36E21]">
            <TbArrowNarrowRight size={28} />
          </span>
        </div>
      </NavLink>

      <NavLink
        className={`flex items-center ({ isActive }) => isActive ? "active" : undefined`}
        to="/add"
      >
        <div className="flex justify-between items-center xl:w-[418px] lg:w-[360px] md:w-[320px] xl:h-[70px] lg:h-[60px] md:h-[50px] h-[60px] hover:bg-[#E9E9EA] px-6 rounded">
          <h2 className="xl:text-[25px] lg:text-[22px] md:text-[20px] text-[22px] font-semibold">
            Add Vehicle
          </h2>
          <span className="text-[#F36E21]">
            <TbArrowNarrowRight size={28} />
          </span>
        </div>
      </NavLink>

      <NavLink
        className={`flex items-center ({ isActive }) => isActive ? "active" : undefined`}
        to="/calculate"
      >
        <div className="flex justify-between items-center xl:w-[418px] lg:w-[360px] md:w-[320px] xl:h-[70px] lg:h-[60px] md:h-[50px] h-[60px] hover:bg-[#E9E9EA] px-6 rounded">
          <h2 className="xl:text-[25px] lg:text-[22px] md:text-[20px] text-[22px] font-semibold">
            Calculate Fuel
          </h2>
          <span className="text-[#F36E21]">
            <TbArrowNarrowRight size={28} />
          </span>
        </div>
      </NavLink>
    </div>
    // <div>
    //   <div className="flex justify-between items-center w-[418px] h-[70px] bg-[#E9E9EA] px-6 rounded">
    //     <h2 className="text-[25px] font-semibold">Choose/Add Vehicle </h2>
    //     <Link to="/choose" className="text-[#F36E21]">
    //       <TbArrowNarrowRight size={28} />
    //     </Link>
    //   </div>
    //   <div className="flex justify-between items-center w-[418px] h-[70px] bg-[#E9E9EA] my-4 px-6 rounded">
    //     <h2 className="text-[25px] font-semibold">Add Vehicle</h2>
    //     <Link to="/add" className="text-[#F36E21]">
    //       <TbArrowNarrowRight size={28} />
    //     </Link>
    //   </div>
    //   <div className="flex justify-between items-center w-[418px] h-[70px] bg-[#E9E9EA] px-6 rounded">
    //     <h2 className="text-[25px] font-semibold">Calculate Fuel</h2>
    //     <Link to="/calculate" className="text-[#F36E21]">
    //       <TbArrowNarrowRight size={28} />
    //     </Link>
    //   </div>
    // </div>
  );
};

export default VahanManu;
