import React from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import vahan from "../.../../../../../asete/banner/vahan.png";
import { Link } from "react-router-dom";

const VahanBanner = () => {
  return (
    <div>
      <img
        className="absolute w-full md:h-[230px] h-[160px]"
        src={vahan}
        alt="img"
      />
      <div className="relative top-12 max-w-7xl mx-auto left-2 ">
        <h2 className="text-white md:text-[55px] text-[28px] interBold font-bold">
          Know you Vahan
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

export default VahanBanner;
